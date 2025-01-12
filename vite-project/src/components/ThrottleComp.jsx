import { useEffect, useRef, useState } from "react";
import { throttle } from "../utilsFuncs/throttle";
import axios from "axios";

function ThrottleComp() {
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);

  const getData = async (params) => {
    console.log("params", params);
    try {
      const res = await axios({
        url: `https://7p724d-8080.csb.app/countries${params ?? ""}`,
        method: "GET",
      });
      console.log("res", JSON.stringify(res?.data));
      if (res?.data) {
        setSuggestions(res.data);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  const throttleGetData = throttle(getData);

  const handleChange = () => {
    let val = inputRef.current?.value;
    let paramName = inputRef.current?.name;
    throttleGetData(`?${paramName}=${val}`);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input ref={inputRef} type="text" name="name" onChange={handleChange} />

      <select name="countrySelected">
        {suggestions.map(({ id, name }) => {
          return <option value={name}>{name}</option>;
        })}
      </select>
    </div>
  );
}

export default ThrottleComp;

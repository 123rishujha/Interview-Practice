// import { reverseString } from "./utilsFuncs";
const { reverseString } = require("./utilsFuncs");

// check If String Can Become Palindrome By Removing AllOccurences Of A Character
function convertToPalinDrome(str) {
  // let obj = {};
  let n = str.length;
  for (let i = 0; i < n; i++) {
    let tempStr = "";

    for (let j = 0; j < n; j++) {
      if (str[j] !== str[i]) {
        tempStr += str[j];
      }
    }
    if (reverseString(tempStr) === tempStr) {
      console.log("Yes");
      return;
    }
  }
  console.log("No");
}

convertToPalinDrome("abcba");
// convertToPalinDrome("hello");

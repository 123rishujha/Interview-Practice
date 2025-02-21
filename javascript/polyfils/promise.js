function myPromise(executor) {
    let onResolve;
    let onReject;
    let fullfiled = false,
      rejected = false,
      result = "",
      called = false; // .then prop callback called
  
    function resolve(val) {
      // if executor code is synchronus resolve func inside executor will be called before .then
      fullfiled = true;
      result = val;
      if (typeof onResolve === "function") {
        onResolve(val);
        called = true;
      }
    }
  
    function reject(reason) {
      rejected = true;
      result = reason;
      if (typeof onReject === "function") {
        onReject(result);
        called = true;
      }
    }
  
    this.then = function (callback) {
      onResolve = callback;
      // if executor code is synchronus resolve func inside executor will be called before .then
      if (fullfiled && !called) {
        callback(result);
      }
      return this;
    };
  
    this.catch = function (callback) {
      onReject = callback;
      if (rejected && !called) {
        callback(result);
      }
      return this;
    };
  
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
  // ----------------- resolve, reject methods --------------
  myPromise.resolve = function (val) {
    return new myPromise((res) => {
      setTimeout(() => res(val), 0);
    });
  };
  
  myPromise.reject = function (val) {
    return new myPromise((res) => {
      setTimeout(() => res(val), 0);
    });
  };
  
  // ----------------- promise all methods --------------
  myPromise.all = function (promiseArr) {
    let result = [];
    function func(resolve, reject) {
      promiseArr.forEach((promObj, index) => {
        promObj
          .then((res) => {
            result.push(res);
            if (index === promiseArr.length - 1) {
              resolve(result);
            }
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
    return new myPromise(func);
  };
  
  // ----------------- promise allSettled methods --------------
  
  myPromise.allSettled = function (promiseArr) {
    let result = [];
    function func(resolve, reject) {
      promiseArr.forEach((promObj, index) => {
        promObj
          .then((res) => {
            result.push({ status: "fullfield", value: res });
            if (index === promiseArr.length - 1) {
              return resolve(result);
            }
          })
          .catch((err) => {
            result.push({ status: "rejected", reason: err });
            if (index === promiseArr.length - 1) {
              return resolve(result);
            }
          });
      });
    }
    return new myPromise(func);
  };
  
  // ----------------- promise race methods --------------
  myPromise.race = function (promiseArr) {
    return new myPromise((resolve, reject) => {
      let settled = false;
      for (let obj of promiseArr) {
        obj
          .then((res) => {
            if (!settled) {
              settled = true;
              resolve(res);
            }
          })
          .catch((err) => {
            if (!settled) {
              settled = true;
              reject(err);
            }
          });
      }
    });
  };
  
  // ----------------- promise any methods --------------
  myPromise.any = function (promiseArr) {
    return new myPromise((resolve, reject) => {
      let settled = false;
      for (let obj of promiseArr) {
        obj.then((res) => {
          if (!settled) {
            settled = true;
            resolve(res);
          }
        });
      }
    });
  };
  
  // ------------------------------- my custom promise function -----------------------------------
  
  let temp1 = new myPromise((resolve, rejected) => {
    let x = true;
    if (x) {
      setTimeout(() => {
        resolve("promise is successfully resolved");
      }, 1000);
    } else {
      setTimeout(() => {
        rejected("promise is rejected");
      }, 1000);
    }
  });
  let temp2 = new myPromise((resolve, rejected) => {
    let x = true;
    if (x) {
      setTimeout(() => {
        resolve("promise is successfully resolved");
      }, 1000);
    } else {
      setTimeout(() => {
        rejected("promise is rejected");
      }, 1000);
    }
  });
  let temp3 = new myPromise((resolve, rejected) => {
    let x = false;
    if (x) {
      setTimeout(() => {
        resolve("promise is successfully resolved");
      }, 1000);
    } else {
      setTimeout(() => {
        rejected("promise is rejected");
      }, 1000);
    }
  });
  
  // temp
  //   .then((res) => {
  //     console.log("fullfiled response:", res);
  //   })
  //   .catch((error) => {
  //     console.log("rejected response:", error);
  //   });
  
  // ---- testing resolve reject methods
  // myPromise.resolve(42).then((res) => console.log("resolve response:", res));
  
  
  //---------- testing all method ----------
  myPromise
    .all([temp1, temp2, temp3])
    .then((res) => {
      console.log("all res :", res);
    })
    .catch((err) => console.log("all err: ", err));
  
  //---------- testing all method ----------
  // myPromise
  //   .allSettled([temp1, temp2, temp3])
  //   .then((res) => {
  //     console.log("all res :", res);
  //   })
  //   .catch((err) => console.log("all rej", err));
  
  //---------- testing all method ----------
  // myPromise
  //   .race([temp1, temp2, temp3])
  //   .then((res) => {
  //     console.log("first res:", res);
  //   })
  //   .catch((err) => console.log("first error:", err));
  
  //---------- testing all method ----------
  // myPromise
  //   .any([temp1, temp2, temp3])
  //   .then((res) => {
  //     console.log("first res:", res);
  //   })
  //   .catch((err) => console.log("first error:", err));
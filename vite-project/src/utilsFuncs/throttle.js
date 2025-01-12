function throttle(func, wait = 3000) {
  let lastCallTime = 0;
  let timeOutId;
  return function (...args) {
    let currentTime = Date.now();

    const invokeFunc = () => {
      lastCallTime = currentTime;
      func(...args);
    };

    if (currentTime - lastCallTime >= wait) {
      invokeFunc();
    } else {
      clearTimeout(timeOutId);
      timeOutId = setTimeout(() => {
        invokeFunc();
        //3000 // wait
        // 3000-1000 -> 2000, current-lastcall
      }, wait - (currentTime - lastCallTime));
    }
  };
}

export { throttle };

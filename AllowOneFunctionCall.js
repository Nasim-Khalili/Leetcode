var once = function (fn) {
    let firstCall = true;
    return function (...args) {
      if (firstCall) {
        firstCall = false;
        return fn(...args);
      }
    };
  };
  
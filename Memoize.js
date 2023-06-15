function memoize(fn) {
    const memo = {};
    return function (...args) {
      const params = JSON.stringify(args);
      if (params in memo) return memo[params];
      const result = fn(...args);
      memo[params] = result;
      return result;
    };
  }
  
  var memoize =
    (fn, cache = {}) =>
    (...args) =>
      cache[args.join()] ?? (cache[args.join()] = fn(...args));
  
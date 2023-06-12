var reduce = function(nums, fn, init) {
    let res = init;

    nums.forEach((n) => {
        res = fn(res, n);
    });
    return res;

    return nums.reduce(fn,init);
};
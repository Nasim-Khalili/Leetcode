var ArrayWrapper = function(nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce (
        (n,a) => n+a, 0
    );
}

ArrayWrapper.prototype.toString = function() {
    return `[${String(nums)}]`;
}

var map = function(arr, fn) {
    const res = new Array(arr.length);

    for(const i in arr){
        res[i] = fn(arr[i], Number(i));
    }
    return res;
};
var createCounter = function(n) {
    var count = n;

    return function() {
        const curentCoun = count;
        count= count +1;
        return count++;
    };
};
var createCounter = n => () => n++;

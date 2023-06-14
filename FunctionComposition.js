var compose = function(functions) {
    const fn = (acc, f) => f(acc);
	return function(x) {
        functions.reduceRight(fn, x)
    }

    return function(x) {
        for (const fn of functions.reverse()){
            x = fn(x);
        }
        return x;
    }
    
};

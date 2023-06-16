var isEmpty = function(obj) {
    if(typeof(obj) == 'object'){
        return Object.keys(obj).length == 0;
    }else {
        return obj.length == 0
    }
};
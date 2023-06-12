var inorderTraversal = function*(arr) {
    for (const n of arr) {
        if(Array.isArray(n)){
            yield* inorderTraversal(n);
        }else {
            yield n;
        }
    }
};

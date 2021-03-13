// we'll make worker.slow caching
let worker = {
    someMethod() {
        return 1;
    },

    slow(x) {
        // scary CPU-heavy task here
        console.log("Called with " + x);
        return x * this.someMethod(); // (*)
    }
};

// same code as before
function cachingDecorator(func) {
    let cache = new Map();
    return function (x) {
        if (cache.has(x)) {
            return cache.get(x);
        }
        // let result = func(x); // (**)
        let result = func.call(this, x);
        cache.set(x, result);
        return result;
    };
}

console.log(worker.slow(1)); // the original method works
worker.slow = cachingDecorator(worker.slow); // now make it caching
console.log(worker.slow(2)); // Whoops! Error: Cannot read property 'someMethod' of undefined


// some other stuff added after original example
let waiter = {
    someMethod() {
        return 5;
    },

    serve(x) {
        // scary CPU-heavy task here
        console.log("Called with " + x);
        return x * this.someMethod(); // (*)
    }
};

console.log(waiter.serve(1));
waiter.serve = cachingDecorator(waiter.serve);
console.log(waiter.serve(2));

//
console.log(`now call worker again with 2:`,  worker.slow(2)); 
console.log(waiter.serve(2));

a = [1, 2, 3];
console.log(`a is`, a);



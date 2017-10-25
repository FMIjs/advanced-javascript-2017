// Task 1;
function curry(func) {
  return function helper(...args) {
    if (func.length === args.length) {
      return func(...args);
    }
    return function (...newParams) {
      return helper(...args.concat(newParams));
    };
  };
}

function sum(a, b, c) {
  return a + b + c;
}

const csum = curry(sum);
console.log(csum(1)(2)(3)); // > 6
console.log(csum(1, 2)(3)); // > 6
console.log(csum(1)(2, 3)); // > 6
console.log(csum(1, 2, 3)); // > 6

// Task 2:
function compose(...funcs) {
  return function (x) {
    return funcs.reduceRight((val, func) => {
      return func(val);
    }, x);
  }
}

var addOne = (x) => x + 1;
var sqrt = (x) => x * x;

addOneSqrt = compose(sqrt, addOne);

console.log(addOneSqrt(1)); // > 4


// Exercise:
// For those who are interested in FP read more about monads and functors
// this is a very simple example just to show you how to chain objects and
// it follows a part of the Promise api but it has nothing to do with how 
// real Promises are implemented! And as we see its synchronous and promises
// are used for chaining async functions.
function syncPromis(func) {
  this.then = function (next) {
    const result = next(func());
    return new syncPromis(function () {
      return result;
    });
  }
}

function something(a, b) {
  return new syncPromis(function () { return a + b; });
}

something(1, 2).then(res => res + 1).then(res => res + 1).then(res => {
  console.log(res); // > 5
});
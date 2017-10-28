// Promises / async - await & Generators
const usingNodeJS = require('./usingNode');
module.exports = function () {

  const asyncOp = num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (num > 3) {
          reject(new Error('Number is > 3'));
          return;
        }
        resolve(num ? num + 1 : 1);
      }, 1000)
    })
  }

  // Chaining thens 1
  asyncOp(1).then(res => {
    console.log(res); // > 2
  });

  // Handling errors 1
  asyncOp(4)
    .then(res => {
      console.log(res); // this will never get called
    })
    .catch(err => {
      console.error(`Handling errors 1 with error: ${err.message}`); // > Handling errors 1 with error: Number is > 3
    });

  // Chaining thens 2
  asyncOp() // resolve will return 1 because of the ternary conditional operator on line 12
    .then(res => {
      return res + 1; // if we don't return a Promise here it will automatically be wraped in a Promise so we can use .then
    })
    .then(res => {
      console.log(res);  // > 2
    }).catch(err => {
      console.log('err', err); // this will never get called
    });


  // Handling errors 2
  asyncOp(1)
    .then(asyncOp) // num will become 2
    .then(asyncOp) // num will become 3
    .then(asyncOp) // num will become 4
    .then(asyncOp) // num will become 5
    .then(res => {
      console.log('This will never get called!');
      console.log(res);
    })
    .catch(err => {
      console.error(`Handling errors 2 with error: ${err.message}`); // > Handling errors 2 with error: Number is > 3

      // Since we have 5 asyncOp calls that means this callback will be fired after AT LEAST 5 sec (longest of all other chains)
      // We will continue our other part of the lecture from here ( take a look at:
      // Promise all -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
      // Promise race -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
      // )

      usingNodeJS(); // Let's see how to use Node with async operations :)
    });


  // Handling errors 3 (multiple error handlers)
  asyncOp(4)
    .then(asyncOp)
    .catch(err => {
      console.log(`First catch called with err: ${err.message}`); // > First catch called with err: Number is > 3
      return 200;
    }) // catch the error from asyncOp(4) call and return 200 to contunue the chain of execution
    .then(val => {
      console.log(`Value is ${val}`); // > Value is 200
      return val;
    })
    .then(asyncOp) // num will be 200 so an error will be thrown
    .catch(err => {
      console.log(`Second catch called with err: ${err.message}`); // > Second catch called with err: Number is > 3
      return Promise.reject(err); // Create a Promise with Rejected state
    })
    .then(res => console.log(res))
    .catch(err => {
      console.log(`Third catch called with err: ${err.message}`); // > Third catch called with err: Number is > 3      
    });

  console.log('About to start processing all async operation callbacks queued ...');
}
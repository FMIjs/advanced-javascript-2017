const fs = require('fs');
const filePath = './test-file.txt';

module.exports = function () {

  function writeToFile(content, cb) {
    return fs.writeFile(filePath, content, cb);
  }

  function readFromFile(cb) {
    return fs.readFile(filePath, cb);
  }

  function writeToFilePromise(content) {
    return new Promise(function (resolve, reject) {
      fs.writeFile(filePath, content, function (err) {
        if (err) {
          reject(err);
          return;
        }
        resolve(content);
      });
    });
  }

  function readFromFilePromise(name = filePath) { // if name is undefuned filePath will be set to name (default params)
    // name = name || filePath // this is the old way of doing default params
    return new Promise(function (resolve, reject) {
      fs.readFile(name, function (err, contentBuffer) {
        if (err) {
          reject(err);
          return;
        }
        resolve(contentBuffer.toString());
      });
    });
  }
  // the body of this operation will be evaluated to content because
  // console.log() returns undefined so content will be returned
  const log = content => console.log(content) || content;


  // Using callbacks

  writeToFile('Hello World!', function (err) {
    if (err) {
      console.log('Error writing to file!');
      return;
    }
    console.log(`Content was written successfuly to ${filePath}`); // > Content was written successfuly to ./test-file.txt
    readFromFile(function (err, contentBuffer) {
      if (err) {
        console.log('Error reading from file!');
        return;
      }
      console.log(`'${contentBuffer.toString()}' was read successfuly from ${filePath}`); // > Hello World!' was read successfuly from ./test-file.txt

      // Now lets use Promises !

      writeToFilePromise('Hello World!')
        .then(() => readFromFilePromise(filePath))
        .then(log) // > Hello World!
        .then(content => {
          console.log(`Content is '${content}'`); // > Content is 'Hello World!'
          return readFromFilePromise('./non-existing-file.txt');
        })
        .catch(err => {
          console.error(err.message); // > ENOENT: no such file or directory, open './non-existing-file.txt'          
          return err;
          // this will be evaluated to resolved promise containing the error so instead of calling the next catch we will end up inside the next then
        })
        .then(async data => {
          console.log(data.message); // > ENOENT: no such file or directory, open './non-existing-file.txt'


          // Now lets do the same thing with async / await
          async function main() {
            try {
              let result = await readFromFilePromise(filePath);
              console.log(result); // > Hello World!
              await writeToFile('Hi!');
              result = await readFromFilePromise(filePath);
              console.log(result); // > Hi!
              await readFromFilePromise('./non-existing-file.txt');
            } catch (err) {
              console.error(err.message); // > ENOENT: no such file or directory, open './non-existing-file.txt'
              throw err;
            }
          }

          return main(); // this will return a promise

        })
        .catch(err => {
          // this will get called because main has thorw err inside its catch
          console.error(err.message); // > ENOENT: no such file or directory, open './non-existing-file.txt'

          // JS Generators 
          function* idMaker(val) {
            let index = 0;
            val = yield index + val; // val will become 2 when code on line 107 is called
            val = yield index + val; // val will become 3 when code on line 108 is called
            yield val;
          }

          var gen = idMaker(1); // Create the gen object with initial value 1
          console.log(gen.next()); // Start execution of idMaker generator body.          This will log: > { value: 1, done: false }
          console.log(gen.next(2)); // Inject 2 to the generator and continue execution.  This will log:  > { value: 2, done: false }
          console.log(gen.next(3)); // Inject 3 to the generator and continue execution.  This will log:  > { value: 3, done: false }
          console.log(gen.next()); // Continue execution so the generator can complete.   This will log:  > { value: undefined, done: true }
          console.log(gen.next()); // A completed generator cannot be used again.         This will log:  > { value: undefined, done: true }

          // We also look into TypeScript very quickly so you can check: https://typescriptlang.org/. We will dive deeper on next lecture.
          console.log('That\'s all folks!');
        });
    })
  });
}
const promises = require('./promises');

// Mixins

class Person {
  constructor(name) {
    this.name = name;
  }
}

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
    this.say = function (message) {
      console.log(`${this.name} says: ${message}`)
    };
  }
  getPosition() {
    return this.position;
  }
}

class SourceEmployee extends Person {
  constructor(name, age, position) {
    super(name);
    this.age = age;
    this.position = position;
  }
  getAge() {
    return this.age;
  }
}

const ivan = new Employee('Ivan', 'Manager');
const sourceIvan = new SourceEmployee('Source Ivan', 20, 'Manager');
const emptyEmployee = new Employee();

// assign all props from sourceIvan to the emptyEmployee object
const updatedSourceIvan = Object.assign(emptyEmployee, sourceIvan);
console.log(updatedSourceIvan === emptyEmployee); // > true
emptyEmployee.say('Hello!'); // "Source Ivan says: Hello!"
updatedSourceIvan.say('Hello!'); // > "Source Ivan says: Hello!"

try {
  sourceIvan.say('Hello!');
} catch (e) {
  console.log(e.message); // > sourceIvan.say is not a function  
}

try {
  emptyEmployee.getAge();
} catch (e) {
  console.log(e.message); // > emptyEmployee.getAge is not a function  
}


const sharedLogic = {
  getPosition: function () {
    return this.position;
  },
  getName: function () {
    return this.name;
  }
}

class NewEmployee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
    Object.assign(this, sharedLogic);
  }
}

class NewSourceEmoloyee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
    Object.assign(this, sharedLogic);
  }
}

const newIvan = new NewEmployee('Ivancho', 'Manager');
const newSourceIvan = new NewEmployee('Ivancho Source', 'Manager');

console.log(newIvan.getPosition()); // > Manager
console.log(newIvan.getName()); // > Ivancho
console.log(newSourceIvan.getPosition()); // > Manager
console.log(newSourceIvan.getName()); // > Ivancho Source

// Take a look at this article ---> http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/

// Callback Hell / Pyramid of doom
function doAsyncOp(params, cb) {
  setTimeout(function () {
    cb(params);
  }, 100);
}

// There are ways to make this code look better but we won't talk about this. We will jump straight into promises after that.
doAsyncOp('You are in', function (params) {
  doAsyncOp(params, function (params) {
    doAsyncOp(params, function (params) {
      doAsyncOp(params, function (params) {
        doAsyncOp(params, function (params) {
          doAsyncOp(params, function (params) {
            doAsyncOp(params, function (params) {
              doAsyncOp(params, function (params) {
                doAsyncOp(params, function (params) {
                  doAsyncOp(params, function (params) {
                    console.log(`${params} callback hell!`);
                    promises();
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});

console.log('You are about to go to callback hell!');
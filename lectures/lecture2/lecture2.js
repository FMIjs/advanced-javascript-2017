// Lecture 2 

// This folder is configured for debugging in Visual Studio Code
// In the debugging tab you will see two configurations ( Launch Lecture 2 / Launch index ) that will respectively start lecture2.js and index.js
// First we start with lecture2.js (the current file)

let person = Object.create(null); // Create a person with no prototype

// assign and configure property age to the person object
Object.defineProperty(person, "age", {
  enumerable: false, // set to true if we want age show up during enumeration of the properties
  configurable: false, // set to true if we want age to be able to be modified or deleted (default is false)
  writable: false, // set to true if we want the associated value (in out case 20) to be changable by the assignment operator
  value: 20 // set 20 to be the value of age
});

console.log(person.age); // > 20
person.age = 300; // person.age is not changed and not exception is thrown
console.log(Object.keys(person)); // > [] // since enumerable is false age wont appear

// JSON (JavaScript object notation) is a serialization format and we have a global object called JSON that we can use to
// serialize and deserialize objects (functions cannot be serialized!) JSON is used only for data transport.
console.log(JSON.stringify(person, null, 2));
// > "{}" - the output is a string representation of the object's data 
// since enumerable is false age wont appear

// take a look at all the options that we can use with definePropery (in the lecture we saw how to defune setters and getters) 
// -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

// for...in iterates over the enumerable properties of an object (escape using for...in)
// there is no guarantee that for...in will return the indexes in any particular order
// for...in will return all enumerable properties, including those with non–integer names and those that are inherited!
// if you only want properties attached to the object itself, and not its prototypes, use getOwnPropertyNames() 
// or perform a hasOwnProperty() check
// its much better to use ES6 for...of loop -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
for (key in person) {
  console.log(key);
} // Nothing will be shown since our object has no iterrable keys

// Copying properties

var ivan = {
  name: "Ivan",
  age: 20,
  posts: {
    count: 2,
    entities: {
      1: {
        id: 1,
        title: 'Post 1',
        content: 'Post 1'
      },
      2: {
        id: 2,
        title: 'Post 2',
        content: 'Post 2'
      }
    }
  }
};

let newIvan = {};

// we want to iterate over ivan keys and add each key to newIvan
Object.keys(ivan).forEach(key => {
  // step 1 - name is assigned to the new object and since name is a string, it is copied
  // step 2 - age is assigned to the new object and since age is a number, it is copied
  // step 3 - posts is assigned to the new object and since posts is an object a new reference is created.
  newIvan[key] = ivan[key];
});

console.log(ivan.posts === newIvan.posts); // > true
newIvan.posts.count = 200;
console.log(ivan.posts.count, newIvan.posts.count); // since ivan.prop and newIvan.prop point to the same object the output is 200, 200

const newNewIvan = JSON.parse(JSON.stringify(ivan)); // A way to create a deep copy all data from ivan to a new object 
// all methods and prototype connections will be lost!
console.log(ivan.posts === newNewIvan.posts); // > false
newNewIvan.posts.count = 300;
console.log(ivan.posts.count, newNewIvan.posts.count); // > 200, 300


// ES6 Classes
// Classes are syntactic sugar! Underneath the inheritance is done exactly the same way we did it in the previous lecture!
// We can have ONLY ONE CONSTRUCTOR because underneath this is only a CONSTRUCTOR FUNCTION
class Person {
  constructor(name, age) {
    const money = 200;
    this.name = name;
    this.age = age;
    // usa a closure to access the "private" property private
    // this is NOT A GETTER! getMoney is a key added to the current context (not to its prototype) that will hold a reference to a function!
    this.getMoney = function () {
      return money;
    };
  }
  // this is not a GETTER! getName is a key added to the Person's PROTOTYPE that will reference a function.
  getName() {
    return 'Person name is: ' + this.name;
  }
}
const ivan1 = new Person('Ivan 1', 20);

// Using extends keyword is syntactic sugar for `Employee.prototype = Object.create(Person.prototype)`;
class Empolyee extends Person {
  constructor(name, age, pos) {
    super(name, age); // super is syntactic sugar for Person.call(this, name, age)
    this.pos = pos;
  }

  getName() {
    return 'Employee name is: ' + this.name;
  }

  callSuperGetName() {
    return super.getName();
  }
}

const ivan2 = new Empolyee('Ivan 2', 20, 'Manager');
console.log(ivan2.getName()) // > 'Employee name is: Ivan 2';
console.log(ivan2.callSuperGetName()); // > 'Person name is: Ivan 2';
console.log(ivan2.getMoney()); // > 200
// after this examples take a look at the other files where we showed how to create and use modules in NodeJS
// what and why do we use package.json and how to construct it with npm init
// npm install or shortly npm i for installing modules or all dependency modules from the package.json
// make sure to run npm i before launching index!
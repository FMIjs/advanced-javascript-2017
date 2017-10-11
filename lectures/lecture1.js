// Creating objects
let gosho = { name: 'Gosho', age: 20 }; // using object literal

// Constructor function
function SimplePerson(name, age) {
  this.name = name;
  this.age = age;
}

let ivan = new SimplePerson('Ivan', 20);

// Defining methods
// using object literal
let sasho = {
  name: 'Alex',
  age: 20,
  getName: function () {
    return this.name;
  }
};

// Constructor function
function Robot(name, speed) {
  this.name = name;
  this.speed = speed;

  score = 0; // <- this will be a "private variable" due to the closures using it (increaseScore, getScore)

  this.getSpeed = function (params) { // <- this function will be created for each object of type Robot
    return this.speed;
  };

  this.increaseScore = function (points) { // <- method using "private variables" can not be added to the prototype
    points = points || 1;
    score += points;
  };

  this.getScore = function () { // <- method using "private variables" can not be added to the prototype
    return score;
  };
}

let pesho = new Robot('Pesho', 300);
pesho.getSpeed(); // > 300

// Switching contexts 
let getRobotName = sasho.getName.bind(pesho);
console.log(getRobotName()); // > Pesho
console.log(sasho.getName.call(pesho)); // > Pesho (arguments are passed after the new context seperated by commas)
console.log(sasho.getName.apply(pesho)); // > Pesho (arguments are passed after the new context as an array)

// Playing with prototypes (lets move get speed so all robots use only one function)
function BetterRobot(name, speed) {
  this.name = name;
  this.speed = speed;
}

BetterRobot.prototype.getSpeed = function () {
  return this.speed;
};

function Person(firstName, lastName, age) {
  this.name = firstName + ' ' + lastName;
  this.age = age;
}

Person.prototype.getFirstName = function () {
  return this.name.split(' ')[0];
}

Person.prototype.getLastName = function () {
  return this.name.split(' ')[1];
}

// Basic Inheritance
function Employee(name, age, position) {
  Person.call(this, name, age); // <- call the Person function with the newly created context (this)
  // we can think about this like calling super(name, age) in other languages or when using ES6 classes
  // (we will talk about them later in the course). In this example Person has some specific logic happening
  // every time an object is constructed so we need to call the Person function with the current context otherwise
  // it won't be inheritance

  this.position = position;
}

// now we need show the prototype connection between the objects that we will be creating
Employee.prototype = Object.create(Person.prototype); // Create a new object empty with __proto__ pointing to Employee.prototype
// It's important to use Object.create and not link prototypes directly!
// Otherwise when adding properties to the Employee.prototype we will be messing up the Person's prototype too because
// they will be pointing to the same object!

Employee.prototype.getPosition = function () {
  return this.position;
};

let todor = new Employee('Todor', 'Todorov', 'Manager');
console.log(todor.getPosition()); // > "Manager"
console.log(todor.getFirstName()); // > "Todor"
console.log(todor.getLastName()); // > "Todorov"

// Arrow Functions VS Functions
function Robot2(name, program) {
  this.name = name;
  this.program = program;
}

let func1 = function () {
  console.log(this.name);
}

let robo1 = new Robot2('robo1', func1);
// func1 will be added to robo1 context (this) and when ever its called this will be robo1 thus it will log the it's name!

let func2 = () => {
  console.log(this.name);
} // Since this is declared in the GLOBAL context and since it's an arrow function it will KEEP it's context and it will log undefined
// because there is no name added to the GLOBAL context!
robo1.program();

// Functions get the context of the location where they are executed in (if we don't explicitly change that using bind, call or apply)
// Arrow functions get the context of the location where they are declared in. (it's not possible to call bind, call or apply on arrow funcs)

let robo2 = new Robot2('robo2', func2);
robo2.program();
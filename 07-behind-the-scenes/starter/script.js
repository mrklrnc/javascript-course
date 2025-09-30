'use strict';

// Hour 1: Scoping, Execution Contexts & Hoisting

console.log('=== BEHIND THE SCENES: SCOPING & HOISTING ===');

// Section 1: Execution Contexts & Call Stack
// Global Execution Context
console.log('Starting program');

function alpha() {
  console.log('alpha:start');
  beta();
  console.log('alpha:end');
}

function beta() {
  console.log('beta');
}

alpha();

function outerFunction() {
  console.log('Outer function start');
  innerFunction();
  console.log('Outer function end');
}

function innerFunction() {
  console.log('Inner function');
  console.trace(); // To see the call stack
}

outerFunction();

// Section 2: Scoping & Scope Chain
// The Three Types of Scope

// 1.) Global Scope
const globalVar = 'I am global';

function anyFunction() {
  console.log(globalVar); // Accessible everywhere
}

// 2.) Function Scope
function myFunction() {
  const functionVar = 'I am function-scoped';
  console.log(functionVar); // Works here
}
// console.log(functionVar); // Error: not accessible outside

// 3.) Block Scope
if (true) {
  let blockVar = 'I am block-scoped';
  const alsoBlockVar = 'Me too';
  var notBlockScoped = 'I leak out'; // var ignores block scope
}

// console.log(blockVar); // Error: not accessible
// console.log(alsoBlockVar); // Error: not accessible
console.log(notBlockScoped); // Works! var leaks out

// Scope Chain in Action
const outer = 'global';

function demoScope() {
  const inner = 'function';
  if (true) {
    const blockConst = 'block';
    var functionVar = 'var-function-scoped';
    console.log(outer, inner, blockConst, functionVar);
  }
  console.log(outer, inner, functionVar);
}

demoScope();

// Scope Chain Exploration
const name = 'GlobalName';

function a() {
  const name = 'FunctionName';
  function b() {
    console.log(name); // 'FunctionName' via scope chain
  }
  b();
}

a();

// Section 3: Hoisting & Temporal Dead Zone
// Variable Hoisting Behavior
// Variable hoisting examples
console.log(varX); // undefined (var hoisted, initialized to undefined)
// console.log(letX); // ReferenceError (TDZ)
// console.log(constX); // ReferenceError (TDZ)

var varX = 1;
let letX = 2;
const constX = 3;

console.log(varX); // 1
console.log(letX); // 2
console.log(constX); // 3

// Function Hoisting Behavior
// Function hoisting examples
console.log(addDecl(2, 3)); // 5 (function declaration hoisted)
// console.log(addExpr(2, 3)); // ReferenceError in TDZ
// console.log(addArrow(2, 3)); // ReferenceError in TDZ

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;

// Now all work:
console.log(addDecl(2, 3)); // 5
console.log(addExpr(2, 3)); // 5
console.log(addArrow(2, 3)); // 5

// Understanding the Temporal Dead Zone (TDZ)

// TDZ Fix Example
// Bad: TDZ
// console.log(apiUrl); // ReferenceError
// const apiUrl = 'https://example.com';

// Good: declare before use
const apiUrl = 'https://example.com';
console.log(apiUrl);

// Hoisting Practice
// 1) Hoisting expectation
// console.log(title); // Uncomment to test: TDZ with let
let title = 'Behind the Scenes';

// 2) Scope chain expectation
function outer() {
  const label = 'outer';
  function inner() {
    console.log('scope:', label); // expect 'outer'
  }
  inner();
}
outer();

// 3) Call stack expectation
function one() {
  two();
}
function two() {
  console.log('stack: two');
}
one(); // expect 'stack: two'

// Hour 2: The this Keyword & Arrow Functions

// Section 1: Understanding the this Keyword
// Basic this Rules and Method Calls
const person = {
  name: 'Mar',
  greet: function () {
    console.log(`Hello, I am ${this.name}`);
  },
};

person.greet(); // "Hello, I am Mar"

// Method Borrowing
const person1 = {
  name: 'Albert',
  greet: function () {
    console.log(`Hello, I am ${this.name}`);
  },
};

// Method borrowing
const anotherPerson = { name: 'Gilbert' };
anotherPerson.greet = person.greet;
anotherPerson.greet(); // "Hello, I am Gilbert"

// Detached function call
const greetFunction = person.greet;
greetFunction(); // "Hello, I am undefined" (in strict mode)

// Common Pitfall: Event Handlers
// This breaks in event handlers
const button = document.querySelector('button');
button.addEventListener('click', person.greet); // `this` becomes the button element!

// Fix: use arrow function wrapper
button.addEventListener('click', () => person.greet());
// Or bind the method
button.addEventListener('click', person.greet.bind(person));

// Section 2: Arrow Functions vs Regular Functions

// Arrow Functions and Lexical this
const obj = {
  name: 'Object',

  regularMethod: function () {
    console.log('Regular:', this.name); // this = obj
  },

  arrowMethod: () => {
    console.log('Arrow:', this.name); // this = global (undefined in strict mode)
  },
};

obj.regularMethod(); // "Regular: Object"
obj.arrowMethod(); // "Arrow: undefined

// Predict the Output
const quiz = {
  name: 'Quiz Object',
  regularMethod() {
    console.log('Regular:', this.name);
  },
  arrowMethod: () => {
    console.log('Arrow:', this.name);
  },
};

quiz.regularMethod(); // Predict: ?
quiz.arrowMethod(); // Predict: ?

// Solving Common this Pitfalls
const timer = {
  name: 'Timer',

  // Old approach with self = this
  start: function () {
    console.log(`${this.name} starting...`);
    const self = this;

    setTimeout(function () {
      console.log(`${self.name} finished`);
    }, 1000);
  },

  // Modern approach with arrow function
  startModern: function () {
    console.log(`${this.name} starting modern...`);

    setTimeout(() => {
      console.log(`${this.name} finished modern`); // this works!
    }, 1500);
  },
};

timer.start(); // Uses self = this approach
timer.startModern(); // Uses arrow function approach

// Common Pitfall: Array Methods
const user = {
  name: 'Dodgie',
  hobbies: ['reading', 'coding', 'gaming', 'basketball', 'jogging'],

  // BROKEN: arrow function loses `this`
  printHobbiesBad: () => {
    this.hobbies.forEach(hobby => {
      console.log(`${this.name} likes ${hobby}`); // this.name is undefined!
    });
  },

  // FIXED: regular function preserves `this`
  printHobbiesGood() {
    this.hobbies.forEach(hobby => {
      console.log(`${this.name} likes ${hobby}`); // this.name works!
    });
  },
};

user.printHobbiesBad(); // Fails - this.name is undefined
user.printHobbiesGood(); // Works - shows all hobbies

// Section 3: The arguments Keyword & Advanced Scenarios

// arguments in Regular vs Arrow Functions
const functionTypes = {
  regularFunction: function () {
    console.log('Arguments length:', arguments.length);
    console.log('First argument:', arguments[0]);
  },

  arrowFunction: () => {
    // console.log(arguments); // ReferenceError: arguments is not defined
    console.log('Arrow function called');
  },

  modernFunction: (...args) => {
    console.log('Args length:', args.length);
    console.log('First arg:', args[0]);
  },
};

functionTypes.regularFunction('hello', 'world');
functionTypes.arrowFunction('test');
functionTypes.modernFunction('modern', 'approach');

// Real-World this Scenarios
// Event handlers and this binding
const userCard = {
  name: 'Dexter Antonio',
  // element: document.querySelector('.user-card'), // Commented for demo

  setupEvents() {
    // BROKEN: this becomes the button element
    // this.element.addEventListener('click', function() {
    //   console.log('Clicked user:', this.name); // this = button element!
    // });

    // FIXED: arrow function preserves outer this
    // this.element.addEventListener('click', () => {
    //   console.log('Clicked user:', this.name); // this = userCard object!
    // });

    console.log('Event setup for:', this.name);
  },
};

userCard.setupEvents();

// Array methods with this context
const calculator = {
  numbers: [1, 2, 3, 4, 5],
  multiplier: 2,

  processNumbers() {
    return this.numbers.map(num => num * this.multiplier);
  },
};

console.log('Processed numbers:', calculator.processNumbers()); // [2, 4, 6, 8, 10]

// Mini-Challenge
const myTimer = {
  name: 'Mar Timer',

  startCountdown() {
    console.log(`${this.name} starting countdown...`);

    setTimeout(() => {
      console.log(`${this.name} countdown finished!`);
    }, 1000);
  },
};

myTimer.startCountdown();

// Hour 3: Primitives vs Objects, Copying & Strict Mode

// Section 1: Stack vs Heap Memory Model
// PRIMITIVES IN STACK
let age = 20;
let oldAge = age; // Independent copy
age = 21;

console.log('age:', age); // 21
console.log('oldAge:', oldAge); // 20 (unchanged!)

// OBJECTS IN HEAP
const me = { name: 'Spongebob', age: 30 };
const friend = me; // Shared reference

friend.age = 27;

console.log('me:', me); // { name: 'Spongebob', age: 27 }
console.log('friend:', friend); // { name: 'Spongebob', age: 27 }

// Test Reference Behavior
function changeAge(person, newAge) {
  person.age = newAge;
  return person;
}

const originalPerson = { name: 'Squidward', age: 25 };
const updatedPerson = changeAge(originalPerson, 30);

console.log('original:', originalPerson); // { name: 'Squidward', age: 30 } - Changed!
console.log('updated:', updatedPerson); // { name: 'Squidward', age: 30 } - Same object!
console.log('same object?:', originalPerson === updatedPerson); // true

// Section 2: Shallow vs Deep Copying
// Shallow Copying Techniques
const original = {
  name: 'X.Borg',
  age: 28,
  hobbies: ['reading', 'coding'],
};

// Spread operator shallow copy
const shallowCopy = { ...original };

shallowCopy.name = 'Arlott';
console.log('original name:', original.name); // 'X.Borg' (unchanged)
console.log('copy name:', shallowCopy.name); // 'Arlott' (changed)

// But nested objects are still shared
shallowCopy.hobbies.push('gaming');
console.log('original hobbies:', original.hobbies); // ['reading', 'coding', 'gaming'] - Changed!
console.log('copy hobbies:', shallowCopy.hobbies); // ['reading', 'coding', 'gaming'] - Same array!

// Object.assign alternative
const anotherCopy = Object.assign({}, original);
console.log('Object.assign copy:', anotherCopy);

// Deep Copying Solutions
const deepOriginal = {
  name: 'Lapu-Lapu',
  age: 32,
  address: { city: 'Cebu', country: 'Philippines' },
  hobbies: ['forging', 'fishing'],
};

// Modern deep copy with structuredClone
const deepCopy = structuredClone(deepOriginal);

deepCopy.address.city = 'Mactan';
deepCopy.hobbies.push('cooking');

console.log('original address:', deepOriginal.address); // { city: 'Cebu', country: 'Philippines' }
console.log('copy address:', deepCopy.address); // { city: 'Mactan', country: 'Philippines' }
console.log('original hobbies:', deepOriginal.hobbies); // ['forging', 'fishing']
console.log('copy hobbies:', deepCopy.hobbies); // ['forging', 'fishing', 'cooking']

// Common Pitfall: JSON Methods
const problemObject = {
  name: 'Test',
  date: new Date(),
  method: function () {
    return 'hello';
  },
  undefinedValue: undefined,
};

// BROKEN: JSON method loses data
const brokenCopy = JSON.parse(JSON.stringify(problemObject));
console.log('Broken copy:', brokenCopy);
// { name: 'Test', date: '2023-...' } - Lost method and undefined!

// FIXED: structuredClone preserves most types
const workingCopy = structuredClone(problemObject);
console.log('Working copy:', workingCopy);
// Note: functions still can't be cloned, but dates work!

// Copying Challenge
const userManager = {
  users: [],

  addUser: function (userData) {
    const deepCopy =
      typeof structuredClone === 'function'
        ? structuredClone(userData)
        : JSON.parse(JSON.stringify(userData));

    this.users.push(deepCopy);
  },

  getUsers: function () {},

  getUsersImmutable: function () {
    const clone =
      typeof structuredClone === 'function'
        ? obj => structuredClone(obj)
        : obj => JSON.parse(JSON.stringify(obj));
    return this.users.map(clone);
  },
};

const originalUser = { name: 'Mr. Crabs', preferences: { theme: 'dark' } };
userManager.addUser(originalUser);

originalUser.name = 'Modified';

console.log('Original changed:', originalUser);
console.log('Stored user:', userManager.getUsers()[0]); // Still 'Plankton'

const arr = userManager.getUsers();
arr.push({ name: 'Plankton' });
console.log('Internal users length:', userManager.users.length); // Still 1

const safeList = userManager.getUsersImmutable();
safeList[0].name = 'ChangedAgain';
console.log('Stored user after immutable-get:', userManager.getUsers()[0]);

// Section 3: Strict Mode Benefits & Integration

// Strict Mode Throughout All Concepts
// 1. Hoisting and TDZ (Hour 1)
// Without strict mode: undeclaredVar = 'This would create a global variable!';
// With strict mode: throws ReferenceError
// undeclaredVar = 'This throws an error in strict mode';

// 2. This keyword (Hour 2)
function demonstrateThis() {
  console.log('this in strict mode:', this); // undefined (not global object)
}
demonstrateThis();

// 3. Object mutation prevention attempts
const readOnlyObj = Object.freeze({ name: 'Frozen' });

try {
  readOnlyObj.name = 'Changed'; // Throws error in strict mode
  console.log('Mutation succeeded');
} catch (error) {
  console.log('Strict mode caught error:', error.message);
}

// Real-World Integration Example
const userManager1 = {
  users: [],

  addUser: function (userData) {
    // Deep copy to avoid reference issues
    const userCopy = structuredClone(userData);
    this.users.push(userCopy);
    return this; // Method chaining
  },

  getUsers: function () {
    // Return shallow copy to prevent external mutation
    return [...this.users];
  },
};

// Test the complete system
const originalUser = { name: 'Cici', preferences: { theme: 'dark' } };
userManager1.addUser(originalUser);

originalUser.name = 'Modified';
console.log('Original changed:', originalUser);
console.log('Stored user:', userManager1.getUsers()[0]); // Still 'Cici'!

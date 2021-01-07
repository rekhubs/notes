
notes reading [https://javascript.info/](https://javascript.info/) (project on GitHub [here](https://github.com/javascript-tutorial/en.javascript.info)) \
The tutorial has 14 chapters for part 1 (21 Aug 2020). \
*see also, some useful materials: [MDN JS docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)*

progress: chapter 2, 8 finished, on chapter 7 <br/><br/>



- [2. JavaScript Fundamentals](#2-javascript-fundamentals)
  - [2.3 The modern mode, `"use strict"`](#23-the-modern-mode-use-strict)
  - [2.7 Type Conversions](#27-type-conversions)
  - [2.8 Basic operators, maths](#28-basic-operators-maths)
  - [2.12 Nullish coalescing operator `??`](#212-nullish-coalescing-operator-)
  - [2.13 Loops: while and for](#213-loops-while-and-for)
  - [2.15 Functions](#215-functions)
- [4. Objects: the basics](#4-objects-the-basics)
  - [4.5 Constructor, operator "new"](#45-constructor-operator-new)
- [5. Data Types](#5-data-types)
- [6. Advanced working with functions](#6-advanced-working-with-functions)
- [7. Object properties configuration](#7-object-properties-configuration)
  - [7.1 Property flags and descriptors](#71-property-flags-and-descriptors)
- [8. Prototypes, inheritance](#8-prototypes-inheritance)
  - [8.1 Prototypal inheritance](#81-prototypal-inheritance)
  - [8.2 F.prototype](#82-fprototype)
  - [8.3 Native prototypes](#83-native-prototypes)
  - [8.4 Prototype methods, objects without `__proto__`](#84-prototype-methods-objects-without-__proto__)
- [10. Classes](#10-classes)


### 2. JavaScript Fundamentals
#### 2.3 The modern mode, `"use strict"`
`"use strict"` or `'use strict'`. When it is located at the top of a script, the whole script works the “modern” way.

#### 2.7 Type Conversions
* String Conversion
```js
let name = true; String(name)  // --> "true"
```
* Numeric Conversion
```js 
Number("   123   ")  // --> 123
```
* Boolean Conversion 

Values that are intuitively “empty”, like `0`, an empty string, `null`, `undefined`, and `NaN`, become false. Other values become true.
```js 
Boolean("0")  // --> true
```
#### 2.8 Basic operators, maths
* Math: Exponentiation `**`
```js 
alert( 4 ** (1/2) );  // 2 (power of 1/2 is the same as a square root)
```

* chaining assignments / use return value
```js 
let a, b, c, d = 1;
a = b = (c = d + 2);
```
#### 2.12 Nullish coalescing operator `??`
Finds a first “defined” variable from the list. `Who is the first goodie??!` Quick defaults assigning.
```js 
let firstName = null, lastName = null, nickName = "Supercoder";
alert(firstName ?? lastName ?? nickName ?? "Anonymous");  // Supercoder, show the first not-null/undefined value
```
Comparison with `||`
```js 
let height = 0;
alert(height || 100); // 100, returns the first truthy value.
alert(height ?? 100); // 0  , returns the first defined value.
```
#### 2.13 Loops: while and for
Labels for break/continue: break out from multiple nested loops at once. <br/>
Label a loop `outer` and break:
```js
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, '');
    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)
    // do something with the value...
  }
}
```
#### 2.15 Functions
Default values for parameters.
```js
function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Alice"); // Alice: no text given
```
... can use a more complex expression, which will be evaluated __every time the function is called__ without the respective parameter.
### 4. Objects: the basics
#### 4.5 Constructor, operator "new"
When a function is executed with new, it does the following steps:
1. A new empty object is created and assigned to `this`.
2. The function body executes. Usually it modifies `this, adds new properties to it.
3. The value of this is returned.

Constructor mode test: `new.target` property: `undefined` or the function itself.

Return from constructors (usually not used):
* If `return` is called with an object, then the object is returned instead of `this`.
* **If `return` is called with a primitive, it’s ignored.**

### 5. Data Types

### 6. Advanced working with functions

### 7. Object properties configuration
#### 7.1 Property flags and descriptors
### 8. Prototypes, inheritance
#### 8.1 Prototypal inheritance
via JS objects' `[[Prototype]]` property, it's either `null` or ref to another object.

To use, `__proto__` is a historical **getter/setter** for `[[Prototype]]`, in modern JS ==> `Object.getPrototypeOf/Object.setPrototypeOf`.

`for...in` loops over both own and inherited keys:

```js
let animal = { eats: true };
let rabbit = { jumps: true, __proto__: animal };

// Object.keys only returns own keys
alert(Object.keys(rabbit)); // jumps

// for..in loops over both own and inherited keys
for(let prop in rabbit) alert(prop); // jumps, then eats

for(let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);
  if (isOwn) {
    alert(`Our: ${prop}`); // Our: jumps
  } else {
    alert(`Inherited: ${prop}`); // Inherited: eats
  }
}
```

#### 8.2 F.prototype

Setting the `"prototype"` property of a constructor function `F` to an object `a`, so that when a new object is created with `new F()`, its `[[Prototype]]` is set to `a`.

```js
let animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

alert( rabbit.eats ); // true
```
`F.prototype` here means a regular property named `"prototype"` on `F`. Setting `Rabbit.prototype = animal` literally states the following: "When a new Rabbit is created, assign its `[[Prototype]]` to `animal`".

The `"prototype"` property only has such a special effect when set on a constructor function, and invoked with `new`.

\
The **default `"prototype"`** is an object with the only property `constructor` that points back to the function itself.
```js
function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

alert( Rabbit.prototype.constructor == Rabbit ); // true
```

#### 8.3 Native prototypes

**Object.prototype**
```js
let obj = {};
alert(obj.__proto__ === Object.prototype); // true
alert(obj.toString === obj.__proto__.toString); //true
alert(obj.toString === Object.prototype.toString); //true
alert(Object.prototype.__proto__); // null
```
**Borrowing from prototypes**
```js
let obj = {
  0: "Hello",
  1: "world!",
  length: 2,
};
obj.join = Array.prototype.join;
alert( obj.join(',') ); // Hello,world!
```
#### 8.4 Prototype methods, objects without `__proto__`
The `__proto__` is considered outdated and somewhat deprecated (in browser-only part of the JavaScript standard). The modern methods:

* [`Object.create(proto, [descriptors])`](www.goo) – creates an empty object with given `proto` as `[[Prototype]]` and optional property descriptors.
* `Object.getPrototypeOf(obj)` – returns the `[[Prototype]]` of `obj`.
* `Object.setPrototypeOf(obj, proto)` – sets the `[[Prototype]]` of `obj` to `proto`.

[# brief history](https://javascript.info/prototype-methods#brief-history)


### 10. Classes



\
\
\
\
some other notes

dynamic
* script
* binding, applying
* F.prototype
* any object can be 
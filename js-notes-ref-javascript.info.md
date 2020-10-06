
notes reading [https://javascript.info/](https://javascript.info/) (project on GitHub [here](https://github.com/javascript-tutorial/en.javascript.info))<br/>
The tutorial has 14 chapters for part 1 (21 Aug 2020). <br/>
*see also, some useful materials: MDN JS [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)*

progress: chapter 2 finished, on chapter 8 <br/><br/>


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

* chainning assignments / use return value
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

showMessage("Ann"); // Ann: no text given
```
... can use a more complex expression, which will be evaluated __every time the function is called__ without the respective parameter.

### 5. Data Types

### 6. Advanced working with functions

### 8. Prototypes, inheritance
#### 8.1 Prototypal inheritance


### 10. Classes


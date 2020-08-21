
notes reading [https://javascript.info/](https://javascript.info/) (project on GitHub [here](https://github.com/javascript-tutorial/en.javascript.info))<br/>
The tutorial has 14 chapters for part 1 (21 Aug 2020). 

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


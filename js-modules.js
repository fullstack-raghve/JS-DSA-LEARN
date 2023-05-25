A Comprehensive Look at ES6 Modules

ADVERTISING


Summary: in this tutorial, you will learn about ES6 modules and how to export variables, functions, and classes from a module, and reuse them in other modules.

An ES6 module is a JavaScript file that executes in strict mode only. It means that any variables or functions declared in the module won’t be added automatically to the global scope.

Executing modules on web browsers
First, create a new file called message.js and add the following code:

export let message = 'ES6 Modules';
Code language: JavaScript (javascript)
The message.js is a module in ES6 that contains the message variable. The export statement exposes the message variable to other modules.

Second, create another new file named app.js that uses the message.js module. The app.js module creates a new heading 1 (h1) element and attaches it to an HTML page. The import statement imports the message variable from the message.js module.

import { message } from './message.js'

const h1 = document.createElement('h1');
h1.textContent = message

document.body.appendChild(h1)
Code language: JavaScript (javascript)
Third, create a new HTML page that uses the app.js module:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>ES6 Modules</title>
</head>
<body>
<script type="module" src="./app.js"></script>
</body>
</html>
Code language: HTML, XML (xml)
Note that we used the type="module" in the <script> tag to load the app.js module. If you view the page on a web browser, you will see the following page:

es6 module
Let’s examine the export and import statements in more detail.

Exporting
To export a variable, a function, or a class, you place the export keyword in front of it as follows:

// log.js
export let message = 'Hi';

export function getMessage() {
  return message;
}

export function setMessage(msg) {
  message = msg;
}

export class Logger {
}
Code language: JavaScript (javascript)
In this example, we have the log.js module with a variable, two functions, and one class. We used the export keyword to exports all identifiers in the module.

Note that the export keyword requires the function or class to have a name to be exported. You can’t export an anonymous function or class using this syntax.

JavaScript allows you to define a variable, a function, or a class first and then export it later as follows:

// foo.js
function foo() {
   console.log('foo');
}

function bar() {
  console.log('bar');
}
export foo;
Code language: JavaScript (javascript)
In this example, we defined the foo() function first and then exported it. Since we didn’t export the bar() function, we couldn’t access it in other modules. The bar() function is inaccessible outside the module or we say it is private.

Importing
Once you define a module with exports, you can access the exported variables, functions, and classes in another module by using the import keyword. The following illustrates the syntax:

import { what, ever } from './other_module.js';
Code language: JavaScript (javascript)
In this syntax:

First, specify what to import inside the curly braces, which are called bindings.
Then, specify the module from which you import the given bindings.
Note that when you import a binding from a module, the binding behaves like it was defined using const. It means you can’t have another identifier with the same name or change the value of the binding.

See the following example:

// greeting.js
export let message = 'Hi';

export function setMessage(msg) {
  message = msg;
}
Code language: JavaScript (javascript)
When you import the message variable and setMessage() function, you can use the setMessage() function to change the value of the message variable as shown below:

// app.js
import {message, setMessage } from './greeting.js';
console.log(message); // 'Hi'

setMessage('Hello');
console.log(message); // 'Hello' 
Code language: JavaScript (javascript)
However, you can’t change the value of the message variable directly. The following expression causes an error:

message = 'Hallo'; // error
Code language: JavaScript (javascript)
Behind the scenes, when you called the setMessage() function. JavaScript went back to the greeting.js module and executed the code in there and changed the message variable. The change was then automatically reflected on the imported message binding.

The message binding in the app.js is the local name for exported message identifier. So basically the message variables in the app.js and greeting.js modules aren’t the same.

Import a single binding
Suppose you have a module with the foo variable as follows:

// foo.js
export foo = 10;
Code language: JavaScript (javascript)
Then, in another module, you can reuse the foo variable:

// app.js
import { foo } from './foo.js';
console.log(foo); // 10;
Code language: JavaScript (javascript)
However, you can’t change the value of foo. If you attempt to do so, you will get an error:

foo = 20; // throws an error
Code language: JavaScript (javascript)
Import multiple bindings
Suppose you have the cal.js module as follows:

// cal.js
export let a = 10,
           b = 20,
           result = 0;

export function sum() {
  result = a + b;
  return result;
}

export function multiply() {
  result = a * b;
  return result;
}
Code language: JavaScript (javascript)
And you want to import these bindings from the cal.js, you can explicitly list them as follows:

import {a, b, result, sum, multiply } from './cal.js';
sum();
console.log(result); // 30

multiply();
console.log(result); // 200
Code language: JavaScript (javascript)
Import an entire module as an object
To import everything from a module as a single object, you use the asterisk (*) pattern as follows:

import * as cal from './cal.js';
Code language: JavaScript (javascript)
In this example, we imported all bindings from the cal.js module as the cal object. In this case, all the bindings become properties of the cal object, so you can access them as shown below:

cal.a;
cal.b;
cal.sum();
Code language: CSS (css)
This import is called namespace import.

It’s important to keep in mind that the imported module executes only once even if import multiple times. Consider this example:

import { a } from './cal.js';
import { b } from './cal.js';
import {result} from './cal.js';
Code language: JavaScript (javascript)
After the first import statement, the cal.js module is executed and loaded into the memory, and it is reused whenever it is referenced by the subsequent import statement.

Limitation of import and export statements
Note that you must use the import or export statement outside other statements and functions. The following example causes a SyntaxError:

if( requiredSum ) {
   export sum;
}  
Code language: JavaScript (javascript)
Because we used the export statement inside the if statement. Similarly, the following import statement also causes a SyntaxError:

function importSum() {
   import {sum} from './cal.js';
}
Code language: JavaScript (javascript)
Because we used the import statement inside a function.

The reason for the error is that JavaScript must statically determine what will be exported and imported.

Note that ES2020 introduced the function-like object import() that allows you to dynamically import a module.

Aliasing
JavaScript allows you to create aliases for variables, functions, or classes when you export and import. See the following math.js module:

// math.js  
function add( a, b ) {
   return a + b;
}

export { add as sum };
Code language: JavaScript (javascript)
In this example, instead of exporting the add() function, we used the as keyword to assign the sum() function an alias.

So when you import the add() function from the math.js module, you must use sum instead:

import { sum } from './math.js';
Code language: JavaScript (javascript)
If you want to use a different name when you import, you can use the as keyword as follows:

import {sum as total} from './math.js';
Code language: JavaScript (javascript)
Re-exporting a binding
It’s possible to export bindings that you have imported. This is called re-exporting. For example:

import { sum } from './math.js';
export { sum };
Code language: JavaScript (javascript)
In this example, we imported sum from the math.js module and re-export it. The following statement is equivalent to the statements above:

export {sum} from './math.js';
Code language: JavaScript (javascript)
In case you want to rename the bindings before re-exporting, you use the as keyword. The following example of imports sum from the math.js module and re-export it as add.

export { sum as add } from './math.js';
Code language: JavaScript (javascript)
If you want to export all the bindings from another module, you can use the asterisk (*):

export * from './cal.js';
Code language: JavaScript (javascript)
Importing without bindings
Sometimes, you want to develop a module that doesn’t export anything, for example, you may want to add a new method to a built-in object such as the Array.

// array.js
if (!Array.prototype.contain) {
  Array.prototype.contain = function(e) {
    // contain implementation
    // ...
  }
}
Code language: JavaScript (javascript)
Now, you can import the module without any binding and use the contain() method defined in the array.js module as follows:

import './array.js';
[1,2,3].contain(2); // true
Code language: JavaScript (javascript)
Default exports
A module can have one and only one default export. The default export is easier to import. The default for a module can be a variable, a function, or a class.

The following is the sort.js module with a default export.

// sort.js
export default function(arr) {
  // sorting here
} 
Code language: JavaScript (javascript)
Note that you don’t need to specify the name for the function because the module represents the function name.

import sort from sort.js;
sort([2,1,3]);
Code language: JavaScript (javascript)
As you see, the  sort identifier represents the default function of the sort.js module. Notice that we didn’t use the curly brace {} surrounding the  sort identifier.

Let’s change the sort.js module to include the default export as well as the non-default one:

// sort.js
export default function(arr) {
  // sorting here
}
export function heapSort(arr) {
  // heapsort
}
Code language: JavaScript (javascript)
To import both default and non-default bindings, you specify a list of bindings after the import keyword with the following rules:

The default binding must come first.
The non-default binding must be surrounded by curly braces.
See the following example:

import sort, {heapSort} from './sort.js';
sort([2,1,3]);
heapSort([3,1,2]);
Code language: JavaScript (javascript)
To rename the default export, you also use the as keyword as follows:

import { default as quicksort, heapSort} from './sort.js';
Code language: JavaScript (javascript)
In this tutorial, you have learned about ES6 modules and how to export bindings from a module and import them into another module.


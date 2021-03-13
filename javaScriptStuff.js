// ARRAYS

// Syntax
array[index];

// Example
var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]; //index starts at 0
primes[0];
primes[3];
primes[150];


// Array Literal
// Can create arrays in two different ways. 
// The most common of which is to list values in a pair of square brackets. 
// JavaScript arrays can contain any types of values and they can be of mixed types.

// Syntax
const arrayName = [element0, element1, ..., elementN]

// Example
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];

// Multi-dimensional Arrays
// A two-dimensional array is an array within an array. 
// If you fill this array with another array you get a three-dimensional array and so on.

// Example
//Two-dimensional, 3x3
const multidimensionalArray = [[1,2,3],[4,5,6],[7,8,9]];

// Array constructor

// Example
const stuff = newArray();
stuff[0] = 34;
stuff[4] = 20;

stuff;

// Accessing nested array elements
// Accessing multi-dimensional array elements is quite similar to one-dimension arrays. 
// They are accessed by using [index][index]….. (number of them depends upon the number of arrays deep you want to go inside).

// Syntax
array[index][index] //..

// Example
const myMultiArray = [
    [1, 2, 3, 4, 5, [1, 2, 3, 4, 5] ],
    [6, 7, 8, 9, 10, [1, 2, 3, 4, 6] ],
    [11, 12, 13, 14, 15, [1, 2, 3, 4, 5] ],
    [16, 17, 18, 19, 20, [1, 2, 3, 4, 5] ]
  ];
   
  console.log(myMultiArray[1][5][4]);

// BOOLEANS
// Boolean literals
// Syntax
true
false

// Boolean Logical Operators
// Syntax
expression1 && expression2
// Returns true if both the expressions evaluate to true
 
expression3 || expression4
// Returns true if either one of the expression evaluates to true
 
!expression5
// Returns the opposite boolean value of the expression

// Example
if (true && false) {;
    // This block is not entered because the second expression is false
  }
   
  if (false || true) {
    // This block is entered because any one of the expression is true
  }
   
  if (!false) {
    // This block is entered because !false evaluates to true
  }
   
  !!true // Evaluates to true

// Example
/* An important thing to note here is the Operator Precedence - which determines the order in which operators are evaluated. 
   Operators with higher precedence are evaluated first. Thus among the four - () , && , || , ! */
 
// Brackets - have the highest precedence
// ! - lower than Brackets
// && - lower than !
// || - the lowest
 
if (true && !!false || true) {
    console.log('Guess again ??');
  }
   
  /* Executed , here is the evaluation process-
  true && !!false || true - becomes
  true && false || true - (no brackets present , so ! evaluated ) becomes
  false || true - (then && evaluated) which becomes true */

// Example
/* Next important thing is the Associativity - which determines the order in which operators of the same precedence are processed. 
// For example, consider an expression: a * b * c. Left-associativity (left-to-right) means that it is processed as (a * b) * c, while right-associativity (right-to-left) means it is interpreted as a * (b * c). */
 
// Brackets , && , || have left to right associativity 
// ! has right to left associativity
 
!false && !!false // false
// evaluated in the manner - !false && false - true && false - false


// COMPARISON OPERATORS
// Syntax
x === y // Returns true if two things are equal
x !== y // Returns true if two things are not equal
x <= y // Returns true if x is less than or equal to y
x >= y // Returns true if x is greater than or equal to y
x < y // Returns true if x is less than y
x > y // Returns true if x is greater than y

// "Truthy" and "Falsy"
// Example
if (1) {
    // Output 'True!', since any non-zero number is considered to be true
    console.log('True!');
  }
   
  if (0) {
    // Not executed, since 0 evaluates to falsy
    console.log('I doubt if this gets executed');
  }
   
  if ('Hello') {
    // Gets executed because non-empty strings are truthy
    console.log('So, any non-empty String is also true.'); 
  }
   
  if ('') {
    // Not executed
    console.log('Hence , an empty String is false');
  }

// == vs. ===
// A simple explanation would be the == does just value checking (no type checking), whereas, === does both value checking and type checking.
// Seeing the examples may make it all clear.
// It was always advisable that you never use ==, because == often produces unwanted results.

// Syntax
expression == expression
expression === expression

// Example
'1' == 1  // true (same value)
'1' === 1 // false (not the same type)
 
true == 1  // true (because 1 evaluates as truthy, though it's not the same type)
true === 1 // false (not the same type)

// CODE COMMENTS
// Code comments are used for increasing the readability of the code.
// If you write 100 lines of code and then forget what each function did, it’s not useful at all. 
// Comments are like notes, suggestions, warnings, etc. that you can put for yourself. 
// Code comments are not executed

// Single Line Comment
// Anything on the line following '//' will be a comment while anything before will still be code.

// Syntax
console.log('This code will be run');
// console.log('Because this line is in a comment, this code will not be run.')
// This is a single line comment.

// Multi-Line Comment
// Anything between /* and */ will be a comment

// Syntax
/* This is
a multi-line


comment!
*/

// CONSOLE
// Prints to the console.
// Useful for debugging.

// Console.log
// Example
const name = 'Codeacademy';
console.log(name);

// Console.time
// This function starts a timer which is useful for tracking how long an operation takes to happen.
// You give each timer a unique name, and may have up to 10,000 timers running on a given page.
// When you call console.timeEnd() with the same name, the browser will output the time, in milliseconds, that elapsed since the timer was started.

// Syntax
console.time(timerName);

// Example
console.time('My Math');
const x = 5 + 5;
console.log(x);
console.timeEnd('My Math');
console.log('Done the math.');
 
/* Output:
10
My Math: (time taken)
Done the math.
*/

// console.timeEnd()
// Stops a times that was previously started by calling console.time()

// Syntax
console.timeEnd(timerName);

// Example
console.time('My Math');
const x = 5 + 5;
console.log(x);
console.timeEnd('My Math');
 
/* Output :
10
My Math: (time taken)
*/


// FUNCTIONS
// A function is a JavaScript procedure—a set of statements that performs a task or calculates a value.
// It is like a reusable piece of code. Imagine , having 20 for loops ,and then having a single function to handle it all. 
// To use a function, you must define it somewhere in the scope from which you wish to call it. 
// A function definition (also called a function declaration) consists of the function keyword, 
// followed by the name of the function, 
// a list of arguments to the function, 
// enclosed in parentheses and separated by commas, 
// the JavaScript statements that define the function, 
// enclosed in curly braces, { }.

// Syntax
function name(argument1 , argument2, /* ..., argumentN */){
    statement1;
    statement2;
    // ... 
    statementN;
  } 

// Example
function greet(name) {
    return 'Hello' + name + '!';
}

// FUNCTION CALLING

// Syntax
functionName(argument1, argument2, ..., argumentN);

// Example
greet('Anonymous');
// Hello Anonymous!

// Function Hoisting
// The two ways of declaring functions produce different results. 
// Declaring a function one way “hoists” it to the top of the call, and makes it available before it’s actually defined.

// Example
hoistedFunction(); // Hello! I am defined immediately!
notHoistedFunction(); // ReferenceError: notHoistedFunction is not defined
 
function hoistedFunction () {
  console.log('Hello! I am defined immediately!');
}
 
var notHoistedFunction = function () {
  console.log('I am not defined immediately.');
}


// IF Statement
// It simply states that is this condition is true, do this, else do something else (or nothing). 
// It occurs in varied forms.

// if

// Syntax
// form : Single If
if (condition) {
    //code that runs if the condition if true
}

// else
// A fallback to an if statement.
// This will only get executed if the previous statement did not.

// Syntax
// If the condition is true, statement1 will be executed.
// Otherwise, statement2 will be executed.
 
if (condition) {
    // statement1: code that runs if condition is true
  } else {
    // statement2: code that runs if condition is false
  }

// Example
if (animal == 'dog') {
    console.log('Bark, bark!');
  } else {
    console.log('Meow!');
  }

// Else If
// This is like an else statement, but with its own condition. 
// It will only run if its condition is true, and the previous statement’s condition was false.

// Syntax
// Form : else if. If the condition is true, statement1 will be executed. 
// Otherwise, condition2 is checked. if it is true, then statement2 is executed. 
// Else, if nothing is true, statement3 is executed.
if (condition1) {
    statement1;
  } else if (condition2) {
    statement2;
  } else {
    statement3;
  }

// Example
if (someNumber > 10) {
    console.log('Numbers larger than 10 are not allowed.');
  } else if (someNumber < 0) {
    console.log('Negative numbers are not allowed.');
  } else {
    console.log('Nice number!');
  }


// LOOPS

// For Loops
// You use for Loops, if you know hot often you'll loop.
// The most often used varName is i.

// Syntax
for ([let i = startValue]; [i < endValue]; [i+=stepValue]) {
    // Loop code here
}

// Example
for (let i = 0; i < 5; i++) {
    console.log(i); // Prints the numbers from 0 to 4
  }

// Example
let i;  // 'outsourcing' the definition
for (i = 10; i >= 1; i--) {
    console.log(i); // Prints the numbers from 10 to 1
}

// Example
/* Note that all of the three statements are optional, i.e. , */
let i = 9;
// This loop is perfectly valid:
for(;;){
    if(i === 0) {
      break;
    }
    console.log(i);
    i--;
}


// While Loops
// You use while loops, if you don't know how often you'll loop.

// Syntax
while (condition) {
    // Your code here
}

// Example
let x = 0;
while (x < 5) {
    console.log(x); // Prints numbers from 0 to 4
    x++;
}

// Example
let x = 10;
while (x <= 5) {
    console.log(x); // Won't be executed
    x++;
}

// Do While Loops
// You use do while loops, if you have to loop at least once, but if you don't know how often.

// Syntax
do {
    // Your code here
} while (condition);

// Example
let x = 0;
do {
    console.log(x); // Prints numbers from 0 to 4
    x++;
} while (x < 5);

// Example
let x = 10;
do {
    console.log(x); // Prints 10
    x++;
} while (x <= 5);


// MATH

// .random()
// Returns a random number between 0 and 1

// Syntax
Math.random()

// Example
Math.random(); // A random number between 0 and 1


// .floor()
// Returns the largest integer less than or equal to a number.

// Syntax
Math.floor(expression);

// Example
Math.floor(9.99); // 9
Math.floor(1 + 0.5); // 1
Math.floor(Math.random() * x + 1); // Returns a random number between 1 and x


// .pow()
// Returns base raised to exponent

// Syntax
Math.pow(base, exponent)

// Example
Math.pow(2,4); // gives 16


// .ceil()
// Returns the smallest integer greater than or equal to a number.

// Syntax
Math.ceil(expression)

// Example
Math.ceil(45.4); // 46
Math.ceil(4 - 1.9); // 3


// .PI
// Returns the ratio of the circumference of a circle to its diameter, approximately 3.14159 or in better terms, the value of PI (π). 
// Note in syntax , we do not put () at the end of Math.PI because Math.PI is not a function.

// Syntax
Math.PI

// Example
Math.round(Math.PI); // rounds the value of PI ,gives 3
Math.ceil(Math.PI); // 4


// .sqrt()
// Returns the square root of a number.

// Syntax
Math.sqrt

// Example
Math.sqrt(5+4); // 3
Math.sqrt(Math.sqrt(122+22) + Math.sqrt(16)); // 4


// NUMBERS

// %(Modulus)
// It returns the remainder left after dividing the left hand side with the right hand side.

// Syntax
number1 % number2

// Example
14 % 9 // returns 5


// isNaN()
// Returns true if the given number is not a number, else returns false.

// Syntax
isNaN([value])

// Example
const userInput = prompt('Enter a number'); // "Enter a number"
 
if (isNaN(userInput)) {
  console.log('I told you to enter a number.');
}
 
// console.log executed since 'a number' is not a number
 
// Another important thing:
 
if (isNaN('3')) {
  console.log('bad');
}
 
// Not executed because the string "3" gets converted into 3, and 3 is a number


// Basic Arithmetic
// Doing basic arithmetic is simple.

// Syntax
4 + 5;  // 9
4 * 5;  // 20
5 - 4;  // 1
20 / 5; // 4

// Example
let x = 15; // x has a value of 15
const y = x++;
// since it is postfix , the value of x (15) is first assigned to y and then the value of x is incremented by 1
console.log(y); // 15
console.log(x); // 16
 
let a = 15; // a has a value of 15
const b = ++a;
// since it is prefix , the value of a (15) is first incremented by 1 and then the value of x is assigned to b
console.log(b); // 16
console.log(a); // 16


// OBJECTS

// Syntax
{
    'property 1': value1,
    property2: value2,
    number: value3
  }

// Example
var obj = {
    name: 'Bob',
    married: true,
    'mother\'s name': 'Alice',
    'year of birth': 1987,
    getAge: function () {
      return 2012 - obj['year of birth'];
    },
    1: 'one'
  };


// PROPERTY ACCESS

// Syntax
name1[string]
name2.identifier

// Example
obj['name'];  // 'Bob'
obj.name;     // 'Bob'
obj.getAge(); // 24


// OOP

// Classes
// A class can be thought of as a template to create many objects with similar qualities. 
// Classes are a fundamental component of object-oriented programming (OOP).

// Syntax
SubClass.prototype = new SuperClass();

// Example
const Lieutenant = function (age) {
    this.rank = 'Lieutenant';
    this.age = age;
  };
   
  Lieutenant.prototype = new PoliceOfficer();
   
  Lieutenant.prototype.getRank = function () {
    return this.rank;
  };
   
  const John = new Lieutenant(67);
   
  John.getJob(); // 'Police Officer'
  John.getRank(); // 'Lieutenant'
  John.retire(); // true




// POPUP BOXES

// alert
// Display an alert dialog with the specified message and an OK button.
// The alert dialog should be used for messages which do not require any response on the part of the user, other than the acknowledgment of the message.

// Syntax
alert(message);

// Example
alert('Hello World!');


// confirm
// Displays a dialog with the specified message and two buttons, OK and Cancel.

// Syntax
confirm('message'); // Returns true if confirmed, false otherwise

// Example
if (confirm('Are you sure you want to delete this post?')) {
    deletePost();
  }


// prompt
// The prompt() displays a dialog with an optional message prompting the user to input some text.
// If the user clicks the “Cancel” button, null is returned.

// Syntax
prompt(message);

// Example
var name = prompt('Enter your name:');
console.log('Hello ' + name + '!');


// Strings
// Strings are text.
// They are denoted by surrounding text with either single or double quotes

// Syntax
string1 + string2

// Example
'some' + 'text'; // returns 'sometext'
const first = 'my';
const second = 'string';
const union = first + second; // union variable is the string 'mystring'


// .length
// Returns the length of a string

// Syntax
string.length

// Example
'My name'.length // 7 , white space is also counted
''.length // 0


// .toUpperCase(), .toLowerCase()
// Changes the cases of the alphabetical letters in the string.

// Example
'my name'.toUpperCase(); // Returns 'MY NAME'
'MY NAME'.toLowerCase(); // Returns 'my name'


// .trim()
// Removes white space from both ends of the string.

// Syntax
string.trim()

// Example
'       a        '.trim(); // 'a'
'     a  a       '.trim(); // 'a  a'


// .replace()
// Returns a string with the first match substring replaces with a new substring.

// Example
'original string'.replace('original', 'replaced'); // returns 'replaced string'


// .charAt()
// Returns the specified character from a string. Characters in a string are indexed from left to right.
// The index of the first character is 0, and the index of the last character in a string called stringName is stringName.length - 1.
// If the index you supply is out of range, JavaScript returns an empty string.

// Syntax
string.charAt(index) // index is an integer between 0 and 1 less than the length of the string.

// Example
'Hello World!'.charAt(0); // 'H'
'Hello World!'.charAt(234); // ''


// .substring()
// Returns the sequence of characters between two indices within a string.

// Syntax
string.substring(indexA[, indexB])
// indexA : An integer between 0 and the length of the string
// indexB : (optional) An integer between 0 and the length of the string.

// Example
'adventures'.substring(2,9); // Returns 'venture'
// substring starts from indexA(2) , and goes up to but not including indexB(9)
'hello'.substring(1); // returns 'ello'
'Web Fundamentals'.substring(111); // returns ''
'In the market'.substring(2,999); // returns ' the market'
'Fast and efficient'.substring(3,3); // returns ''
'Go away'.substring('abcd' , 5); // returns 'Go aw'
// Any non-numeric thing is treated as 0


// indexOf()
// Returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex.
// Returns -1 if the value is not found.
// The .indexOf() method is case sensitive.

// Syntax
string.indexOf(searchValue[, fromIndex]) // fromIndex is optional. It specifies from which index should the search start.Its default value is 0.

// Example
'My name is very long.'.indexOf('name'); // returns 3
'My name is very long.'.indexOf('Name'); // returns -1 , it's case sensitive
'Where are you going?'.indexOf('are', 11); // returns -1
'Learn to Code'.indexOf(''); //returns 0 
'Learn to Code'.indexOf('', 3); // returns 3
'Learn to Code'.indexOf('', 229); // returns 13 , which is the string.length



// SWITCH STATEMENTS
// Acts like a big if / else if / else chain. Checks a value against a list of cases, and executes the first case that is true.
// It goes on executing all other cases it finds after the first true case till it finds a breaking statement, after which it breaks out of the switch.
// If it does not find any matching case, it executes the default case.

// Syntax
switch (expression) {
    case label1:
      statements1;
      // break;
    case label2
      statements2;
      // break;
    ...
    case labelN:
      statementsN;
      // break;
    default:
      defaultStatement;
      // break;
  }


// Example
const weather = "clear";
 
switch (weather) {
  case 'clear':
    console.log("Beautiful day!");
  case 'cloudy':
    console.log('I wish the sun were out!');
  default:
    console.log('Some weather, huh?');
}
 
// Because there are no breaks, all three statements will be logged



// TERNARY OPERATOR
// The ternary operator is usually used as a shortcut for the if statement.

// Syntax
condition ? expr1 : expr2

// Example
const grade = 85;
console.log('You ' + (grade > 50 ? 'passed!' : 'failed!'));
 
//Output: You passed!
 
/* The above statement is same as saying:
if(grade > 50){
  console.log('You ' + 'passed!');  // or simply 'You passed!'
}
else{
    console.log('You ' + 'failed!'); 
}
*/


// VARIABLES

// Variable Assignment

// Syntax
var name = value;

// Example
var x = 1;
var myName = 'Bob';
var hisName = myName;


// ES6 const and let

// Syntax
// let variables can be reassigned
let message = 'I can be reassigned!';
// const variables cannot be reassigned
const message2 = 'I cannot be reassigned';

// Scope
// let and const are both scoped to the block in which they are initialized.
// This can be a smaller scope than var variables, which are scoped to the function in which they are initialized.


// Variable Reassignment

// Syntax
varname = newValue

// Example
// Declare variable and give it value of 'Michael'
let name = 'Michael'
// Change the value of name to 'Samuel'
name = 'Samuel'

// const variables cannot be reassigned and attempting to do so will throw a TypeError:

// Example
// Declare variable and give it value of 'Michael'
const name = 'Michael'
// Try changing the value of name to 'Samuel'
name = 'Samuel'
// Throws:
// TypeError: Assignment to constant variable.
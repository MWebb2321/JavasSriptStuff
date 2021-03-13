// An array is a special type of variable. It doesn't just store one value; it stores it as a list.



// Creating An Array
var colors;
colors = ['white', 'black', 'custom'];

var el = document.getElementById('colors');
el.textContent = colors[0];



var colors = new Array('white',
                       'black',
                       'custom');

var el = document.getElementById('colors');
el.textContent = colors[0];



// Values in Arrays

// Numbering Items In An Array
var colors;
colors = ['white',
          'black',
          'custom'];

// Accessing Items In An Array
var itemThree;
itemThree = colors[2];

// Number Of Items In An Array
var numColors;
numColors = colors.length;



// Accessing & Changing Values In An Array

// Create The Array
var colors;
colors = ['white',
          'black',
          'custom'];

// Update The Third Item In The Array
colors[2] = 'beige';

// Get the element with an id of colors
var el = document.getElementById('colors');

// Replace with third item from the array
el.textContent = colors[2];
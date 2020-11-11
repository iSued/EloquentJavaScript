"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//data structures:objects and arrays
//simple array example
var listOfNumbers = [1, 2, 23, 4, 5];
console.log(listOfNumbers[1]);
console.log(listOfNumbers["0"]);
var marco = "name";
var sued = 2;
var marco1 = {
  name: "sued",
  surname: "sinani"
};
console.log(marco1[marco]);
var sued1 = [1, 2, 3, 4, 56, 7, 8, 9, 0];
console.log(sued1[sued]);
var doh = "Doh";
console.log(_typeof(doh.toUpperCase));
console.log(doh.toUpperCase()); //stack and pop sono parte del linguaggio informatico pur potendo sembrare termini banali.

var sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
console.log(sequence.pop());
console.log(sequence);
var day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1);
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1);
var descriptions = {
  work: "went to work",
  "touched tree": "touched a tree"
};
console.log(descriptions);
console.log(descriptions["work"]);
var anObject = {
  left: 1,
  right: 2
};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);
console.log(Object.keys(anObject));
console.log(anObject);
var trystr = "sued"; //assign

var objectA = {
  a: 1,
  b: 2
};
var objectB = {
  b: 3,
  c: 4
};
console.log(objectA);
console.log(objectB);
Object.assign(objectA, objectB);
console.log(objectA);
var testarr = [1, 2, 3, 4, 5, 6, 7];
console.log(_typeof(testarr));
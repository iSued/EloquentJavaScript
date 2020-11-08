"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function marco() {
  console.log(sued());

  function sued() {
    return 'diocane';
  }
}

marco();

function wrapValue(n) {
  var local = n;
  return function () {
    return local;
  };
}

;
var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());
console.log(_typeof(wrap1));

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

;
var twice = multiplier(2);
console.log(twice(2));

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3)); //more similar to way mathematicians define a power and this is a recursion. 
//find all numbers by starting from 1 and adding 5 or myltiplyng * 3 !!USING RECURSION WITH IF LOOP!!

var findSolution = function findSolution(target) {
  var find = function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, "(".concat(history, " + 5)")) || find(current * 3, "(".concat(history, " * 3)"));
    }
  };

  return find(1, "1");
};

console.log(findSolution(24)); //Growing functions
//print the number of cows and chickens on a farm.

function printFarmInventory(cows, chickens) {
  var cowString = String(cows); //input into a string  

  while (cowString.length < 3) {
    //until the lenght of the string is not 3 do this----"0" + = concatenate.
    cowString = "0" + cowString;
  }

  console.log("".concat(cowString, " Cows"));
  var chickenString = String(chickens);

  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }

  console.log("".concat(chickenString, " Chickens"));
}

printFarmInventory(7, 11); //instead of add every time other lines of codes
//create a reusable function 

function printZeroPaddedWithLabel(number, label) {
  var numberString = String(number);

  while (numberString.length < 3) {
    numberString = "0" + numberString;
  }

  console.log("".concat(numberString, " ").concat(label));
} //call the previous function for every animal with different labels.


function printFarmInventory1(cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, "Cows");
  printZeroPaddedWithLabel(chickens, "Chickens");
  printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory1(1, 2, 3); //printZeroPaddedWithLabel is not a proper name to call a function !!AWKARD!!
//better way and cleaner to build this code !!MORE READABLE AND REUSABLE!!

function zeroPad(number, width) {
  var string = String(number);

  while (string.length < width) {
    string = "0" + string;
  }

  return string;
}

function printFarmInventory2(cows, chickens, pigs) {
  console.log("".concat(zeroPad(cows, 3), " Cows"));
  console.log("".concat(zeroPad(chickens, 3), " Chickens"));
  console.log("".concat(zeroPad(pigs, 3), " Pigs"));
}

printFarmInventory2(7, 16, 3); //Exercises
//MINIMUM write a function min that take two arguments and return their minimum.
//my solution 

var min = function min(a, b) {
  return Math.min(a, b);
};

console.log(min(10, 2)); //Eloquent solution

function min1(a, b) {
  if (a < b) return a;else return b;
} //RECURSION 
//---another way to see if a number is even or odd---
//Zero is even---One is odd---for any other number N, its evenness is the same as N-2
//Define a recursive function corresponding to the previous description of the problem---How the function behave on -1 <----FIX
//eloquent solution 


function isEven(n) {
  if (n == 0) return true;else if (n == 1) return false;else if (n < 0) return isEven(-n);else return isEven(n - 2);
}
/*Descrizione della soluzione*/
// BEAN COUNTING
//probably a recursive function 
//string.lenght last position = string.lenght-1 
//Eloquent's solution 


function countChar(string, z) {
  var counted = 0;

  for (var i = 0; i < string.length; i++) {
    2;

    if (string[i] == z) {
      counted += 1;
    }
  }

  return counted;
} //ha più senso creare una funzione generica e richiamarla in un caso specifico


function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC")); // → 2

console.log(countChar("kakkerlak", "k")); // → 4
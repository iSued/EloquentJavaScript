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
  var cowString = String(cows);

  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }

  console.log("".concat(cowString, " Cows"));
  var chickenString = String(chickens);

  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }

  console.log("".concat(chickenString, " Chickens"));
}

printFarmInventory(7, 11);
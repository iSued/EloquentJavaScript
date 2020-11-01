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

console.log(power(2, 3));
arr = [1, 2, 3, 4, 5, 6, 6, 7, 8];
darr = String(arr);
console.log(Math.min(arr));
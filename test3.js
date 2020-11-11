function marco() {
    console.log(sued())

    function sued() {
        return 'diocane'
    }
}
marco();

function wrapValue(n) {
    let local = n;
    return () => local;
};
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());
console.log(typeof wrap1);

function multiplier(factor) {
    return number => number * factor;
};

let twice = multiplier(2);
console.log(twice(2));

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }

}
console.log(power(2, 3));

//more similar to way mathematicians define a power and this is a recursion. 

//find all numbers by starting from 1 and adding 5 or myltiplyng * 3 !!USING RECURSION WITH IF LOOP!!
const findSolution = function (target) {
    const find = function (current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(24));
//Growing functions
//print the number of cows and chickens on a farm.
function printFarmInventory(cows, chickens) {
    let cowString = String(cows); //input into a string  
    while (cowString.length < 3) { //until the lenght of the string is not 3 do this----"0" + = concatenate.
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);

//instead of add every time other lines of codes
//create a reusable function 
function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while (numberString.length < 3) {
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);
}
//call the previous function for every animal with different labels.
function printFarmInventory1(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");
}
printFarmInventory1(1, 2, 3);
//printZeroPaddedWithLabel is not a proper name to call a function !!AWKARD!!
//better way and cleaner to build this code !!MORE READABLE AND REUSABLE!!
function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

function printFarmInventory2(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory2(7, 16, 3);


//Exercises
//MINIMUM write a function min that take two arguments and return their minimum.
//my solution 
const min = function (a, b) {
    return Math.min(a, b);
}
console.log(min(10, 2));
//Eloquent solution
function min1(a, b) {
    if (a < b) return a;
    else return b;

}
//RECURSION 
//---another way to see if a number is even or odd---
//Zero is even---One is odd---for any other number N, its evenness is the same as N-2
//Define a recursive function corresponding to the previous description of the problem---How the function behave on -1 <----FIX
//eloquent solution 
function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
}
/*Descrizione della soluzione*/
// BEAN COUNTING
//probably a recursive function 
//string.lenght last position = string.lenght-1 
//Eloquent's solution 
function countChar(string, z) { // called for the value 
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == z) {
            counted += 1;
        }
    }
    return counted;
}
//ha più senso creare una funzione generica e richiamarla in un caso specifico

function countBs(string) { // called for the side effect
    return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
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
printFarmInventory(7, 11, 90);

//instead of add every time other lines of codes
function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while (numberString.length < 3) {
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");
}
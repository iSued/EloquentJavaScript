//data structures:objects and arrays
//simple array example
let listOfNumbers = [1, 2, 23, 4, 5];
console.log(listOfNumbers[1]);
console.log(listOfNumbers["0"]);

let marco = "name";
let sued = 2;

let marco1 = {
    name: "sued",
    surname: "sinani"
};
console.log(marco1[marco]);
let sued1 = [1, 2, 3, 4, 56, 7, 8, 9, 0];
console.log(sued1[sued]);

let doh = "Doh";
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());
//stack and pop sono parte del linguaggio informatico pur potendo sembrare termini banali.
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
console.log(sequence.pop())
console.log(sequence);

let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1);
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1);

let descriptions = {
    work: "went to work",
    "touched tree": "touched a tree"
};
console.log(descriptions);
console.log(descriptions["work"]);

let anObject = {
    left: 1,
    right: 2
};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);
console.log(Object.keys(anObject));
console.log(anObject)
let trystr = "sued"
//assign
let objectA = {
    a: 1,
    b: 2,
}
let objectB = {
    b: 3,
    c: 4
}
console.log(objectA);
console.log(objectB);
Object.assign(objectA, objectB);
console.log(objectA);

let testarr = [1, 2, 3, 4, 5, 6, 7]
console.log(typeof testarr);
//mutability
let object1 = {
    value: 10
};
let object2 = object1;
let object3 = {
    value: 10
};
console.log(object1 == object2);
console.log(object1 == object3);
object1.value = 15;
console.log(object2.value);
console.log(object3.value);
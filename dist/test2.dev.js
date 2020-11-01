"use strict";

console.log(Number.isInteger(23));
var result = 1;
var count = 0;

while (count < 10) {
  result *= 2;
  count += 1;
}

console.log(result);
console.log(count);

var marco = function marco(a) {
  switch (a) {
    case "rainy":
      console.log('remember umbrella');
      break;

    case 'sunny':
      console.log('dress lightly');

    case 'cloudy':
      console.log('go outside');
      break;

    default:
      console.log("che cazzo di tempo c'è fuori?");
      break;
  }
};

marco('cloudy'); //exercises comunque leggere eloquent javascript è tutta un'altra roba. MY SOLUTIO-N

for (var tri = 1; tri <= 7; tri++) {
  console.log('#'.repeat(tri));
}

; //FIZZBUZZ

for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 === 0) output += "Fizz";
  if (n % 5 === 0) output += "Buzz";
  console.log(output || n);
}

; //chessboard

var size = 8;
var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }

  board += "\n";
}

console.log(board);
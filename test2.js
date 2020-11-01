console.log(Number.isInteger(23));

let result = 1;
let count = 0;
while (count < 10) {
  result *= 2;
  count += 1;
}
console.log(result);
console.log(count);

let marco = function (a) {
  switch (a) {
    case "rainy":
      console.log('remember umbrella');
      break;
    case 'sunny':
      console.log('dress lightly');
    case 'cloudy':
      console.log('go outside');
      break
    default:
      console.log("che cazzo di tempo c'è fuori?");
      break
  }
};
marco('cloudy');

//exercises comunque leggere eloquent javascript è tutta un'altra roba. MY SOLUTIO-N
for (let tri = 1; tri <= 7; tri++) {
  console.log('#'.repeat(tri))
};
//FIZZBUZZ
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 === 0) output += "Fizz";
  if (n % 5 === 0) output += "Buzz";
  console.log(output || n);
};
//chessboard
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
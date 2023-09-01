let numeros = [1, 2, 3, 4, 5];

console.log("Declaration");
numeros.forEach(imprimirD);

// Declaration
function imprimirD(number) {
  console.log(number);
}

// expression

console.log("Expression");
const imprimirE = function (number) {
  console.log(number);
};

numeros.forEach(imprimirE);

console.log("Expression anonima");

numeros.forEach(function (number) {
  console.log(number);
});

// arrow

console.log("Arrow");
const imprimirA = (number) => console.log(number);

numeros.forEach(imprimirA);

console.log("Arror anonima");

numeros.forEach( number => console.log(number));

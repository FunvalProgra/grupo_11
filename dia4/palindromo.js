// Ana
// ana ✅

// listo
// otsil ❌

let palabra = prompt("Escribe una palabra");
// let palabra = "persona";

// console.log(palabra[0]);
// console.log(palabra[1]);
// console.log(palabra[2]);
// console.log(palabra[3]);
// console.log(palabra[4]);

let resultado = "";

for (let i = palabra.length - 1; i >= 0; i--) {
  resultado = resultado + palabra[i];
}

if (palabra == resultado) {
  alert("Tu palabra es palindromo ✅")
} else {
  alert("Tu palabra no es palindromo ❌")
}
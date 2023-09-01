let abc = "abcdefghijklmnopqrstuvwxyz";
let longitud = 10;
let contrasenia = "";
// Math


for (let i = 0; i < longitud; i++) {
  contrasenia += obtenLetraRandom(abc);
  // contrasenia = contrasenia + abc[indiceAleatorio]
}

console.log(contrasenia);

function obtenLetraRandom(texto) {
  let indiceAleatorio = Math.floor(Math.random() * texto.length);
  return texto[indiceAleatorio]
}
let clave = "escrituras";

let pista = "_s_______s";

let vidas = 3;

let esGanador = false;

while (vidas > 0) {
  alert("Te quedan " + vidas + " vidas");

  let letra = prompt("La pista es: " + pista + ". Escribe una letra:");

  let nuevaPista = "";
  for (let i = 0; i < clave.length; i++) {

    if(clave[i] == letra) {
      nuevaPista = nuevaPista + clave[i];
    } else {
      nuevaPista = nuevaPista + pista[i];
    }

  }

  pista = nuevaPista;
}


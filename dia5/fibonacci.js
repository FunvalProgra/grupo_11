function hacerFibonacci(terminos) {
  // let terminos = parseInt(prompt("Escribe cuantos terminos tendrá tu serie fibonacci"));
  // let terminos = 5;

  while (terminos  <= 2 || isNaN(terminos)) {
    alert("Debes ingresar un numero mayor a 2");
    terminos = parseInt(prompt("Escribe cuantos terminos tendrá tu serie fibonacci"));
  }

  let a = 0;
  let b = 1;

  //  0, 1, 1, 2, 3, 5, 8
  let resultado = "0, 1";

  for (let i = 2; i < terminos; i++) {
    let nuevoNumero = a + b;

    resultado += ", " + nuevoNumero;

    a = b;
    b = nuevoNumero;
  }

  console.log(resultado)
}

hacerFibonacci(7);

hacerFibonacci(10);

hacerFibonacci(15);
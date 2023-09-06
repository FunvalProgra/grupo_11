const entrada = document.querySelector("#entrada");
const button = document.querySelector("#button");
const resultado = document.querySelector("#resultado");

button.addEventListener("click", () => {
  const value = entrada.value;

  resultado.innerHTML = value;
})
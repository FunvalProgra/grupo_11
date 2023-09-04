const titulo = document.querySelector("#titulo");
const btn = document.querySelector("#btn");
const container = document.querySelector("#container");
console.log(container)

// crear elementos
const p = document.createElement("p");

p.textContent = "Soy una etiqueta p";

container.appendChild(p);

// container.innerHTML = `<p>Soy la etiqueta p pero con innerHTML</p>`;

// leer informacion
let contenido = p.textContent;
console.log("leer",contenido)

// actualizar
p.textContent = "Etiqueta p actualizada";

// eliminar
p.remove()


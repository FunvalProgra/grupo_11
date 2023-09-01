import { estudiantes } from "./estudiantes.js";
import { crearRow } from "./functions.js";

// elementos HTML a usar
const tbody = document.querySelector("#tbody");
const form = document.querySelector("#form");

form.addEventListener("submit", addStudent);

function addStudent(event) {
  event.preventDefault();

  let matricula = form.matricula.value;
  let nombre = form.nombre.value;
  let responsable = form.responsable.value;
  let pais = form.pais.value;

  let student = {
    matricula,
    nombre,
    responsable,
    pais
  }

  estudiantes.push(student);

  tbody.innerHTML = "";

  for (let student of estudiantes) {
    tbody.innerHTML += crearRow(student);
  };
  

}


for (let student of estudiantes) {
  tbody.innerHTML += crearRow(student);
};


// export/import
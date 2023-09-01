import { estudiantes } from "./estudiantes.js";
import { crearRow } from "./functions.js";

const tbody = document.querySelector("#tbody");

for (let student of estudiantes) {
  if (student.pais === "Colombia") {
    tbody.innerHTML += crearRow(student);
  }
};


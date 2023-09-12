import { estudiantes } from "./estudiantes.js";
import { print, setLocal, getLocal, updateLocal } from "./functions.js";

// validar el login

const loggin = sessionStorage.getItem("loggin-info");

if (loggin !== "true") {
  window.location.href = "./login.html";
}

// elementos HTML a usar
const tbody = document.querySelector("#tbody");
const form = document.querySelector("#form");
const formFiltro = document.querySelector("#form-filtro");
const logOut = document.querySelector("#logout");
const title = document.querySelector("#title");
const confirmDelete = document.querySelector("#confirmDelete");

title.innerHTML = "Bienvenido " + sessionStorage.getItem("loggin-username");

let estudiantesLocal = [];
let id_count;

// recopilar la informacion del local storage
if(getLocal('estudiantes')) {
  estudiantesLocal = getLocal('estudiantes');
  id_count = getLocal('id_count');
} else {
  setLocal('estudiantes', estudiantes);
  estudiantesLocal = getLocal('estudiantes');
  
  // ordena los estudiantes
  estudiantesLocal.sort( (a,b) => a.id - b.id );

  id_count = estudiantesLocal[estudiantesLocal.length - 1].id + 1;
  // guardar count en localStorage
  setLocal('id_count', id_count);
}


print(estudiantesLocal, tbody);
addEventDelete();

// Escuchadores de Eventos
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let matricula = form.matricula.value;
  let nombre = form.nombre.value;
  let responsable = form.responsable.value;
  let pais = form.pais.value;

  let student = {
    id: id_count,
    matricula,
    nombre,
    responsable,
    pais,
  };

  estudiantesLocal.push(student);
  // estudiantes[estudiantes.length] = student;

  estudiantesLocal = updateLocal('estudiantes', estudiantesLocal);
  id_count = updateLocal('id_count', id_count + 1);

  print(estudiantesLocal, tbody);
  addEventDelete();

  form.reset();

  form.matricula.focus();
});

formFiltro.addEventListener("submit", (event) => {
  event.preventDefault();
  let nombre = formFiltro.nombre.value.toLowerCase();

  let alumnosFiltrados = estudiantesLocal.filter((student) =>
    student.nombre.toLowerCase().includes(nombre)
  );

  print(alumnosFiltrados, tbody);

  addEventDelete();
});

logOut.addEventListener("click", () => {
  sessionStorage.setItem("loggin-info", "false");
  sessionStorage.removeItem("loggin-username");

  window.location.href = "./login.html";
});

confirmDelete.addEventListener("click", () => {
      let id = parseInt(confirmDelete.getAttribute("data-id"));

      let indice = estudiantesLocal.findIndex((student) => student.id === id);

      estudiantesLocal.splice(indice, 1);

      estudiantesLocal = updateLocal('estudiantes', estudiantesLocal);

      print(estudiantesLocal, tbody);
      addEventDelete();
})

function addEventDelete() {
  // añadir el evento de borrar a los botones .delete
  let botonesDelete = tbody.querySelectorAll(".delete");
  
  botonesDelete.forEach((boton) => {
    boton.addEventListener("click", () => {
      confirmDelete.setAttribute('data-id', boton.getAttribute('data-id'));
    });
  });
}


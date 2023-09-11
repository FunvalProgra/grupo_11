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

// recopilar la informacion del local storage
if(getLocal('estudiantes')) {
  estudiantesLocal = getLocal('estudiantes');
} else {
  setLocal('estudiantes', estudiantes);
  estudiantesLocal = getLocal('estudiantes');
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
    matricula,
    nombre,
    responsable,
    pais,
    id: estudiantesLocal.length // corregir el codigo de estudiante
  };

  estudiantesLocal.push(student);
  // estudiantes[estudiantes.length] = student;

  estudiantesLocal = updateLocal('estudiantes', estudiantesLocal);


  print(estudiantesLocal, tbody);
  addEventDelete();

  form.reset();

  form.matricula.focus();
});

formFiltro.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  let nombre = formFiltro.nombre.value.toLowerCase();

  let alumnosFiltrados = estudiantesLocal.filter((student) =>
    student.nombre.toLowerCase().includes(nombre)
  );

  console.log(alumnosFiltrados);

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


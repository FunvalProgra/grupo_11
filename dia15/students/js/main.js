import { estudiantes } from "./estudiantes.js";
import { print } from "./functions.js";

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

title.innerHTML = "Bienvenido " + sessionStorage.getItem("loggin-username");

print(estudiantes, tbody);
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
  };

  estudiantes.push(student);
  // estudiantes[estudiantes.length] = student;

  print(estudiantes, tbody);
  addEventDelete();

  form.reset();

  form.matricula.focus();
});

formFiltro.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  let nombre = formFiltro.nombre.value.toLowerCase();

  let alumnosFiltrados = estudiantes.filter((student) =>
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

function addEventDelete() {
  // añadir el evento de borrar a los botones .delete
  let botonesDelete = tbody.querySelectorAll(".delete");

  botonesDelete.forEach((boton) => {
    boton.addEventListener("click", () => {
      let id = parseInt(boton.getAttribute("data-id"));

      let indice = estudiantes.findIndex((student) => student.id === id);

      estudiantes.splice(indice, 1);

      print(estudiantes, tbody);
      addEventDelete();
    });
  });
}

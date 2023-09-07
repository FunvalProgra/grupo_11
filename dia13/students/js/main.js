import { estudiantes } from "./estudiantes.js";
import { print } from "./functions.js";

// validar el login

const loggin = sessionStorage.getItem('loggin-info');

if (loggin !== 'true') {
  window.location.href = './login.html';
}

// elementos HTML a usar
const tbody = document.querySelector("#tbody");
const form = document.querySelector("#form");
const formFiltro = document.querySelector("#form-filtro");
const logOut = document.querySelector("#logout");
const title = document.querySelector("#title");

title.innerHTML = "Bienvenido " + sessionStorage.getItem('loggin-username');

print(estudiantes, tbody)

// Escuchadores de Eventos
form.addEventListener("submit", event => {
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

  print(estudiantes, tbody)
  
  form.reset();

  form.matricula.focus();
});

formFiltro.addEventListener("submit", event => {
  event.preventDefault();
  console.log(event)
  let nombre = formFiltro.nombre.value.toLowerCase();

  let alumnosFiltrados  = estudiantes.filter( student => student.nombre.toLowerCase().includes(nombre))

  console.log(alumnosFiltrados)

  print(alumnosFiltrados, tbody)

})

logOut.addEventListener("click", () => {
  sessionStorage.setItem('loggin-info', 'false');
  sessionStorage.removeItem('loggin-username');

  window.location.href = './login.html';
})
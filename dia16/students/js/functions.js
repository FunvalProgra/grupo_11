
function crearRow(student) {
  let tr = `
  <tr> 
    <td>${student.matricula}</td>
    <td>${student.nombre}</td>
    <td>${student.responsable}</td>
    <td>${student.pais}</td>
    <td><button data-id="${student.id}" class="delete">X</button></td>
  </tr>
  `

  return tr
}

export function print(array, donde) {

  donde.innerHTML = "";

  array.forEach( student =>  donde.innerHTML += crearRow(student))
}

export function setLocal(key, data) { // pongo informacion
  localStorage.setItem(key, JSON.stringify(data))
}

export function getLocal(key) { // obtengo informacion
  return JSON.parse(localStorage.getItem(key))
}

export function updateLocal(key, data) {
  setLocal(key, data);

  return getLocal(key);
}
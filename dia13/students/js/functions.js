
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
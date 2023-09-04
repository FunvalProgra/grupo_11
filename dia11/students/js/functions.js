
function crearRow(student) {
  let tr = `
  <tr> 
    <td>${student.matricula}</td>
    <td>${student.nombre}</td>
    <td>${student.responsable}</td>
    <td>${student.pais}</td>
  </tr>
  `

  return tr 
}

export function print(array, donde) {

  donde.innerHTML = "";
  
  // for (let student of estudiantes) {
  //   tbody.innerHTML += crearRow(student);
  // };

  array.forEach( student =>  donde.innerHTML += crearRow(student))
}
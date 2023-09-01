
export function crearRow(student) {
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
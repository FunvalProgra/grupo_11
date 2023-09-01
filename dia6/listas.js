// nombres de personas

const nombres = [
  "Jonatan",
  "Isaias",
  "Francisco",
  "Hector",
  "Harold",
  "Nicky",
  "Jeremy",
  "Malaquias"
]

const apellidos = [
  "Perez",
  "Ramirez",
  "Vasquez",
  "Ordoñez",
  "Torres",
  "Hoyos",
  "Villa",
  "Quiñones"]

for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i] +" " + apellidos[i])
}

// estudiantes
const alumnos = [
  { nombre: "Jonatan", apellido: "Perez" },
  { nombre: "Isaias", apellido: "Ramirez"}
]

console.log("Nuestos estudiantes")

for (let i = 0; i < alumnos.length; i++) {
  console.log(alumnos[i].nombre + " " + alumnos[i].apellido)
}
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const btn4 = document.querySelector("#btn-4");

const vista1 = document.querySelector("#vista1");
const vista2 = document.querySelector("#vista2");
const vista3 = document.querySelector("#vista3");
const vista4 = document.querySelector("#vista4");

const vistas = [vista1, vista2, vista3, vista4];

btn1.addEventListener("click", () => makeVisible("vista1"))

btn2.addEventListener("click", () => makeVisible("vista2"))

btn3.addEventListener("click", () => makeVisible("vista3"))

btn4.addEventListener("click", () => makeVisible("vista4"))

function makeVisible(id) {
  vistas.forEach( vista => {
    if(vista.id == id) {
      vista.classList.remove("none") // hace visible
    } else {
      vista.classList.add("none") // oculta
    }
  })
}
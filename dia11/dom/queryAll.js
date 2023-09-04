const liItems = [...document.querySelectorAll(".li-item")];

// const listLiItems = [];

// liItems.forEach( item => listLiItems.push(item));

console.log(liItems)

const passwordInput = document.querySelector("#password");
const mostrar = document.querySelector("#mostrar");

mostrar.addEventListener("click", () => {
  if(passwordInput.getAttribute("type") == "password") {
    passwordInput.setAttribute("type", "text")
    mostrar.textContent = "Ocultar Contraseña"
  } else {
    passwordInput.setAttribute("type", "password")
    mostrar.textContent = "Mostrar Contraseña"

  }
})

// traer el formulario

const formLogin = document.querySelector("#formLogin");
const user = {
  email: "demo@demo.com",
  password: "Funval2023"
}


formLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = formLogin.email.value;
  let password = formLogin.password.value;

  console.log(email, password)

  if( user.email === email && user.password === password ) {
    // guardar el login en el local storage
    sessionStorage.setItem('loggin-info', 'true');

    window.location.href = './index.html';

  } else {
    alert("Los datos no coinciden.")
  }

})
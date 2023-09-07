import { users } from './users.js';

// traer el formulario

const formLogin = document.querySelector("#formLogin");


formLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = formLogin.email.value;
  let password = formLogin.password.value;

  console.log(email, password)

  /* login varios usuarios */
  const userLogged = users.find( user => user.email === email && user.password === password )

  if( userLogged ) {
    // guardar el login en el local storage
    sessionStorage.setItem('loggin-info', 'true');
    sessionStorage.setItem('loggin-username', `${userLogged.first_name} ${userLogged.last_name}`)

    window.location.href = './index.html';

  } else {
    alert("Los datos no coinciden.")
  }

})
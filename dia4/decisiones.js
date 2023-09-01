let instrucciones = `Lee atentamente la historia y toma una decisión, 
deberás escribir la palabra que está en mayuscula y correspoda a tu decisión.`;

let historia1 = `Eres un caballero que está frente a una torre, no sabemos que hay adentro pero tienes que entrar,
puedes entrar por la PUERTA o puedes entrar por la VENTANA, ¿por cual de estos dos sitios
ingresarás?` // backticks ``

// muestra las instrucciones
alert(instrucciones);

let decision1 = prompt(historia1) // recibe la decision de la primera parte de la historia

// "Puerta"
decision1 = decision1.toUpperCase();
decision1 = decision1.trim();
// "PUERTA"

// estructura para verificar si escribio una respuesta valida
while(decision1 != "PUERTA" && decision1 != "VENTANA") {
  decision1 = prompt("Escribiste un dato errado, intenta nuevamente. Elije PUERTA o VENTANA");
  decision1 = decision1.toUpperCase();
  decision1 = decision1.trim();
}

if (decision1 == "PUERTA") {

  alert("funciono, entraste por la puerta 😬")

} else if(decision1 == "VENTANA") {

  alert("acaba de entrar por la ventana 😨")

}
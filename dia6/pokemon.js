// declaro mis pokemons
const pikachu = {
  atk: 55,
  vida: 100
}

const jiglypuff = {
  atk: 45,
  vida: 100
}

// declaramos el turno
let turno = 1;

while( pikachu.vida > 0 && jiglypuff.vida > 0) {

  if(turno == 1) { 
    // turno de pikachu
    jiglypuff.vida = jiglypuff.vida - pikachu.atk;
    console.log("La vida de Jiplipuf ahora es " + jiglypuff.vida)
    turno = 0;
  } else {
    // turno de Jiglipuff
    pikachu.vida = pikachu.vida - jiglypuff.atk;
    console.log("La vida de Picahu ahora es " + pikachu.vida)
    turno = 1;
  }

}

if (pikachu.vida <= 0) {
  console.log("Jiglipuf ganó")
} else {

  console.log("Pikachu ganó")
}
// crear array con elementos booleanos que representan las minas (true significa que hay una mina)
let roadMines = [false, true, true, true, false];
// let firstMinePosition = -1;
let firstMineFound = false;

// recorrer los elementos de mi array de minas con un loop
for (let i = 0; i < roadMines.length; ++i) {
  // para cada elemento de mi array => mostrar mensaje "the tank has moved to $ {position}"
  console.log(`the tank has moved to ${i + 1}`);

  if (roadMines[i] == true) {
    // si es la primera mina que el tanque se encuentra => mostrar mensaje “the tank is damaged”
    if (firstMineFound) {
      console.log("the tank has been destroyed");
      break;
    } else {
      console.log("the tank is damaged");
      firstMineFound = true;
    }
  }
}

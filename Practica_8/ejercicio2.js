//Crear una cadena que contenga letras repetidas

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let letra = '', veces = '', cadena= '';

function preguntarLetras() {
    rl.question("¿Que letra desea, X o Z?", (inputLetra)=>{
        letra = inputLetra.toUpperCase();
        if (letra === 'Z' || letra === 'X') {
            preguntarVeces();
        }else{
            console.log("Debes elegir entre la X o Z.");
            preguntarLetras();
        }
    });
}

function preguntarVeces() {
    rl.question ("¿Cuantas repeticiones (1-15)?", (inputVeces)=>{
        veces = parseInt(inputVeces);
        if (veces >= 1 && veces <= 15) {
            generacionCadena();
        }else{
            console.log("El número debe estar entre 1 y 15.");
            preguntarVeces();
        }
    });
}

function generacionCadena() {
    while (veces > 0) {
        cadena += letra;
        veces--;
    }
    console.log("Resultado: " + cadena);
    rl.close();
}

preguntarLetras();

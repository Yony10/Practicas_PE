//Pedir contraseña hasta que sea correcta con el do-While

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const contrasenaCorrecta = "1234"; //definimos la contra correcta

function pedirContrasena() {
    rl.question("Introduce la contraseña:", (contrasenaIntroducida)=>{
        if (contrasenaIntroducida !== contrasenaCorrecta) {
            console.log("Contraseña Incorrecta. Intentalo de nuevo.");
            pedirContrasena();
        }else{
            console.log("¡Bienvenido! Has indroducido la contraseña correcta.");
            rl.close();
        }
    });
}
pedirContrasena();
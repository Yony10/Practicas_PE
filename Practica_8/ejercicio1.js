//Crear un menu con tres opciones

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function mostrarMenu() {
  rl.question(
    "1. - Escribir\n2. - Leer\n3. - Salir\nEscoge una opción:",(opcion) => {
      switch (opcion) {
        case "1":
          console.log("Opción 1: Eliges Escribir");
          mostrarMenu();
          break;
        case "2":
          console.log("Opción 2: Eliges Leer");
          mostrarMenu();
          break;
        case "3":
          console.log("Fin del programa");
          rl.close();
          break;

        default:
          console.log("Debes elegir una de las opciones válidas");
          mostrarMenu();
      }
    }
  );
}
mostrarMenu();

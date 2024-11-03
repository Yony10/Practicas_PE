const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Ingrese el numero del mes (1-12):", (meses) => {
  let mes = parseInt(meses);

  switch (mes) {
    case 1:
      nombreMes = "Enero";
      break;
    case 2:
      nombreMes = "Febrero";
      break;
    case 3:
      nombreMes = "Marzo";
      break;
    case 4:
      nombreMes = "Abril";
      break;
    case 5:
      nombreMes = "Mayo";
      break;
    case 6:
      nombreMes = "Junio";
      break;
    case 7:
      nombreMes = "Julio";
      break;
    case 8:
      nombreMes = "Agosto";
      break;
    case 9:
      nombreMes = "Septiembre";
      break;
    case 10:
      nombreMes = "Octubre";
      break;
    case 11:
      nombreMes = "Noviembre";
      break;
    case 12:
      nombreMes = "Diciembre";
      break;
    default:
      nombreMes = "no es válido";
  }
  console.log(`El numero ${mes} es ${nombreMes}`);
  rl.close();
});

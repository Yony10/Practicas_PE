let numeroMes = 4;
let nombreMes = "";

switch (numeroMes) {
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
    default:
        nombreMes = "Mes no válido"
}
console.log(`El mes es: ${nombreMes}`);

const nombres = ["Ana", "Luis", "María", "Juan", "Carlos", "Elena", "Sofía", "Pedro"];


console.log("Lista de nombres:");
for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]); 
}


let cantidadNombres = nombres.length;
console.log("\nCantidad total de nombres: " + cantidadNombres);


let nombreBuscado = "María";
let encontrado = false;
for (let i = 0; i < nombres.length; i++) {
  if (nombres[i] === nombreBuscado) {
    encontrado = true;
    console.log("\nNombre '" + nombreBuscado + "' encontrado en la posición: " + (i + 1));
    break;
  }
}

if (!encontrado) {
  console.log("\nEl nombre '" + nombreBuscado + "' no fue encontrado en el array.");
}


let nombreMasLargo = nombres[0];

for (let i = 1; i < nombres.length; i++) {
  if (nombres[i].length > nombreMasLargo.length) {
    nombreMasLargo = nombres[i];
  }
}

console.log("\nEl nombre más largo es: " + nombreMasLargo);


console.log("\nNombres en mayúsculas:");
for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i].toUpperCase());
}


let nuevoNombre = "Gabriela";
nombres.push(nuevoNombre);
console.log("\nLista actualizada de nombres (después de agregar " + nuevoNombre + "):");
for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}


nombres.pop();
console.log("\nLista de nombres después de eliminar el último:");
for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}


console.log("\nNombres en orden inverso:");
for (let i = nombres.length - 1; i >= 0; i--) {
  console.log(nombres[i]);
}
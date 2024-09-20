let puntaje = 85;
let calificacion = "";

if (puntaje >= 90) {
    console.log("A");
}else if (puntaje >= 80) {
    console.log("B");
}else if (puntaje >= 70) {
    console.log("C");
}else if (puntaje >= 60) {
    console.log("D");
}else{
    calificacion ="F";
}

console.log(`La calificacion del etuadiante es: ${calificacion}`);

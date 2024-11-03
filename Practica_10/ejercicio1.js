class Persona {
    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }
    imprimirInfo(){
        console.log(`Nombre; ${this._nombre}, Edad: ${this._edad}`);
    }
}
const persona1 = new Persona("Alex", 18);
persona1.imprimirInfo();
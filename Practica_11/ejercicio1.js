class Persona {
    constructor(nombre, apellido) {
        //Propiedades privadas
        this._nombre= nombre;
        this._apellido= apellido;
    }
    //Metodo get para obtenes nombre completo
    get nombreCompleto(){
        return `${this._nombre} ${this._apellido}`
    }
}
const persona = new Persona("Yony", "Benitez")
console.log(`Nombre completo: ${persona.nombreCompleto}`);

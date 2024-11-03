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
    //Metodo set para asignar el nombre completo
    set nombreCompleto(nombreCompleto){
        [this._nombre, this._apellido]=nombreCompleto.split(" ")
    }

}
const persona = new Persona("Yony", "Benitez");
persona.nombreCompleto = "Alex Salazar"
console.log(`Nombre completo: ${persona.nombreCompleto}`);
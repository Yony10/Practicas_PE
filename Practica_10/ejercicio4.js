class Animal {
    constructor(nombre) {
        this._nombre = nombre;
    }

    hacerSonido(){
        console.log(`${this._nombre} hace un sonido.`);
    }
}

class Perro extends Animal{
    hacerSonido(){
        console.log(`${this._nombre} ladra.`);      
    }
}
const perro = new Perro('Rex');//Parece mas nombre de dinosaurio jajaj
perro.hacerSonido();
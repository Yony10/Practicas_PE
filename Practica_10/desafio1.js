class Libro {
    constructor(titulo, autor, numero) {
        this._titulo = titulo;
        this._autor = autor;
        this._numero = numero;
    }
    mostraInfo(){
        console.log(`${this._titulo} de ${this._autor} publicado en el año ${this._numero}`);
    }
}

const libro = new Libro('Don quijote de la mancha', 'Miguel de Cervantes', 1605);
libro.mostraInfo();
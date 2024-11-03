class Ciclista {
    constructor(distanciaRecorrida) {
        this._distanciaRecorrida = distanciaRecorrida;
    }

    get distanciaRecorrida (){
        if (this._distanciaRecorrida  > 0 ) {
            console.log("El ciclista esta en movimiento.");
        }else if(this._distanciaRecorrida == 0){
            console.log("El ciclista esta actualmente parado.");
        }
    }
    set distanciaRecorrida(newDistance){
        if (newDistance > -1) {
            this._distanciaRecorrida = newDistance;
            console.log(`Nuevo valor asignado a la distancia del recorrido = ${newDistance}`); 
        } else{
            console.log("El valor de distancia debe ser mayor a -1."); 
        }        
    }
}

const ciclista1 = new Ciclista (1);

ciclista1.distanciaRecorrida = 0;
ciclista1.distanciaRecorrida;

ciclista1.distanciaRecorrida=10;

ciclista1.distanciaRecorrida= -1;

ciclista1.distanciaRecorrida;
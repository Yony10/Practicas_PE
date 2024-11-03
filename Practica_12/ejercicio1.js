class Articulo {
    constructor(nombre, precio, stock) {
        this._nombre = nombre;
        this._precio = precio;
        this._stock = stock;
    }
    //Metodo para gestionar la compra del producto
    comprar(cantidad){
    //Verificar si la cantidad es valida y si hay suficiente stock
        if (cantidad > 0 && this._stock > this._stock - cantidad >- 0) {
            this._stock -= cantidad;
            let total = cantidad * this._precio

            //mensaje si se compra  mas de una cantidad
            if (cantidad > 1) {
            console.log(`Usted ha comprado ${cantidad} unidades del producto ${this._nombre} - Total: $${total}`);
            }else{
            console.log(`Usted ha comprado ${cantidad} unidades del producto ${this._nombre} - Total: $${total}`);
            }
        }
        //mensaje de stock en cero
        else if(this._stock <= 0){
            console.log(`El producto ${this._nombre}  actualmente esta agotado`)
        }
        else if(this._stock - cantidad < 0){
            console.log(`La cantidad que quiere comprar es demasiada, actualmente solo hay ${this._stock} unidadades del producto ${this._nombre}`);
        }
        else{
            console.log("La cantidad debe ser mayor a 0");
    }
}
    reabastecer(cantidad){
        if (cantidad >0 ) {
            this._stock += cantidad;
            console.log(`Reabasteciendo el stock - Cantidad disponible del producto ${this._nombre} = ${this._stock}`);
        }else{
            console.log("La cantidad que decea reabastecer debe ser mayor a 0");
        }
    }
}

const ART = new Articulo("jabón", 20,10);

ART.comprar(11);
ART.comprar(1);

ART.reabastecer(20);

ART.comprar(15);
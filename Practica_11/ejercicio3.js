class Clima {
    constructor(celcius) {
        this._celcius = celcius;
    }
   //Metodo get para obtener la temperatura en farenheit
   get farenheit(){
    return (this._celcius * 9)/ 5 + 32;
   }

   //metodo set para asignar la temperatura en farenheit
   set farenheit(farenheit){
    this._celcius = ((farenheit-32)*5)/9;
   }
   //Get y Set para la tempearatura en celsius

   get celcius(){
    return this._celcius
   }
   set celcius(celcius){
    this._celcius = celcius;
   }

}
const clima = new Clima(25)
console.log(`Clima en grados Farenheit: ${clima.farenheit}°F`);

clima.farenheit = 77;
console.log(`Clima en grados Celsius: ${clima.celcius}°C`);



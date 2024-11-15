const fs = require('fs')
const fileName = 'vehiculos.json'

function addVehicule() {
    fs.readFile(fileName, 'utf-8', (err, content)=>{
        if (err) {
            console.log('Error al leer el archivo', err);
            return;
        }
        const vehiculos = JSON.parse(content);
        const nuevoVehiculo = {id:4, marca:'Ford', modelo:'Focus', año:2020}
        vehiculos.push(nuevoVehiculo)
    
        fs.writeFile(fileName, JSON.stringify(vehiculos, null, 2), (err)=>{
            if (err) {
                console.log('Error al escribir el archivo', err);
            }else{
                console.log('Nuevo vehiculo agregado al archivo JSON');
            }
        })
    })
}
module.exports = addVehicule;

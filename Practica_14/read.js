const fs = require('fs')
const fileName = 'vehiculos.json'

function readVehicule() {
    fs.readFile(fileName, 'utf-8', (err, content)=>{
        if (err) {
            console.log('Error al leer el archivo', err);
            return;
        }
        try {
            const objetoJSON=JSON.parse(content)
            console.log('Flota de vehiculos', objetoJSON);
            
        } catch (error) {
            console.log('Error al parsear los datos');
        }
    })
}
module.exports=readVehicule;

const fs = require('fs')
const fileName = 'vehiculos.json'

function countVehicule() {
    fs.readFile(fileName, 'utf-8', (err, content)=>{
        if (err) {
            console.log('Error al leer el archivo', err);
            return;
        }
        const vehiculos=JSON.parse(content)
        console.log(`La flota de vehiculos es de: ${vehiculos.length}`);
        
    })   
}
module.exports=countVehicule;
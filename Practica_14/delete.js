const fs = require('fs');
const { off } = require('process');
const fileName = 'vehiculos.json'

function deleteVehicule() {
    fs.readFile(fileName, 'utf-8', (err,data)=>{
        if (err) {
            console.log('Error al leer el archivo JSON', err);
            return;
        }
        try {
            const vehiculos =JSON.parse(data)
            const idEliminar=2;

            const indice = vehiculos.findIndex(vehiculo => vehiculo.id ===idEliminar);
            vehiculos.splice(indice, 1)

            fs.writeFile(fileName, JSON.stringify(vehiculos, null, 2),(err)=>{
                if (err) {
                    console.log('Error al escribir el archivo JSON');
                    
                }else{
                    console.log('Archivo eliminado del archivo JSON exitosamente');
                    
                }
            })
        } catch (error) {
            console.error('Error al parsear los datos', error);
            
        }
    })
}
module.exports=deleteVehicule;
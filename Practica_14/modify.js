const fs = require('fs')
const fileName = 'vehiculos.json'

function modifyVehicule() {
    fs.readFile(fileName, 'utf-8', (err, content)=>{
        if (err) {
            console.log('Error al leer el archivo', err);
            return;
        }
        try {
            const vehiculos = JSON.parse(content);
            const idEliminar = 2;
            const indice = vehiculos.findIndex((vehiculo)=>vehiculo.id === idEliminar);
            vehiculos[indice].año=2022;

            fs.writeFile(fileName, JSON.stringify(vehiculos, null, 2),(err)=>{
                if (err) {
                   console.log('Error al escribir el archivo JSON', err);
                    
                }else{
                    console.log('Año de vehiculo actualizado exitosamente');
                    
                }
            })
        } catch (error) {
            console.error('Error al parsear el JSON', error);
            
        }
    });
};
module.exports=modifyVehicule;

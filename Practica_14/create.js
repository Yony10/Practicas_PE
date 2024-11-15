const fs = require('fs')
const fileName = 'vehiculos.json'

function createVehicule() {
    const vehiculos = [
        {id:1, marca:'Toyota', modelo:'Corolla', año:2020},
        {id:2, marca:'Honda', modelo:'Civic', año:2019},
        {id:3, marca:'Ford', modelo:'Focus', año:2021}
    ];

    fs.writeFile(fileName, JSON.stringify(vehiculos, null, 2),(err)=>{
        if (err) {
            console.log('Error al crear el archivo', err);
        }else{
            console.log('Archivo JSON creado exitosamente con tres vehiculos iniciales');
            
        }
    })
}
module.exports=createVehicule;
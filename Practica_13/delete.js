const fs = require('fs')
const fileName = 'biblioteca.json'

fs.readFile(fileName,'utf-8', (err,data)=>{
    if (err) {
        console.error('Error al leer el archivo JSON', err);
        return;
    }
    try {
        const libros = JSON.parse(data);
        libros.splice(0, 1);

        fs.writeFile(fileName, JSON.stringify(libros, null, 2), (err)=>{
            if (err) {
                console.error('Error al escribir el archivo JSON', err);
                
            }else{
                console.log('Libro eliminado del archivo JSON exitosamente');
                
            }
        })
    } catch (error) {
        console.error('Error al parsear el archivo JSON', error);
    }
})
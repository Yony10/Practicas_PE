const fs = require('fs')
const fileName = 'biblioteca.json'

fs.readFile(fileName, 'utf8', (err, content)=>{
    if (err) {
        console.error('Error al leer el archivo JSON', err);
        return;
    }
    try{
        const libros = JSON.parse(content);
        //Modificar el segundo libro de false a true
        libros[1].disponible= true;

        fs.writeFile(fileName, JSON.stringify(libros, null, 2),(err)=>{
            if (err) {
                console.error('Error al escribir el archivo JSON', err);
            }else{
                console.log('Disponibildad de lbros actualizada exitosamente');
            }
        });
    }catch(error){
        console.error('Error al parsear los datos');
        
    }
});
const fs = require('fs')
const fileName = 'biblioteca.json'

fs.readFile(fileName, 'utf8', (err, content)=>{
    if (err) {
        console.error('Error al leer el archivo JSON', err);
        return;
    }
    try {
        const objetoJSON = JSON.parse(content);
        console.log('Libros de la biblioteca:', objetoJSON);
    
    } catch (error) {
        console.error('Error al parsear el archivo', error);
    }
})
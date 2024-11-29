//Importar el modulo express
const express = require('express')

//Crea una instancia en el servidor express
const app = express();

//Defina en el puerto en el que se escuchara el servidor
const PORT = process.env.PORT || 3000;

//Configuracion de rutas
//Ruta principal root que responde un mensaje
app.get('/', (req,res)=>{
    res.send('Hola Mundo! Mi servidor express');
});

//Inicia el servidor y se escucha en el puerto especificado
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    
})

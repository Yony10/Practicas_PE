const express=require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

//RUTAS
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'views', 'index.html'));
});

app.get('/about', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'about.html'))
});

app.use((req, res)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, ()=>{
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
    
})
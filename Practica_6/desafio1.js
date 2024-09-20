const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su edad:",(edad)=>{
    let parseEdad = parseInt (edad)
    categoria= ""

    if (parseEdad <= 12 ) {
        categoria = "Niño"
    }else if(parseEdad > 12 && parseEdad <= 17){
        categoria = "Adolescente"
    }else if(parseEdad > 17 && parseEdad <= 35){
        categoria = "Adulto joven"
    }else if(parseEdad > 35 && parseEdad <= 59){
        categoria = "Adulto"
    }else if(parseEdad > 59){
        categoria = "Adulto mayor"
    }else{
        categoria = "Edad ingresada no valida"
    }

    console.log(`Usted es un ${categoria}`);
    rl.close()
})
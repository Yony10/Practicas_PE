
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Generar un número aleatorio entre 1 y 10
const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let intentos = 0;

const preguntarNumero = () => {
    rl.question('Adivina un número entre 1 y 10: ', (respuesta) => {
        const adivinanza = parseInt(respuesta);
        intentos++;

        if (adivinanza === numeroAleatorio) {
            console.log(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
            rl.close();
        } else if (adivinanza > numeroAleatorio) {
            console.log('El número es menor. Inténtalo de nuevo.');
            preguntarNumero(); 
        } else {
            console.log('El número es mayor. Inténtalo de nuevo.');
            preguntarNumero(); 
        }
    });
};

preguntarNumero();


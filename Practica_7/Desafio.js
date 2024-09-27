const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function contarVocalesYNumeros(cadena) {
    let vocales = 0;
    let numeros = 0;
    const vocalesStr = 'aeiouAEIOU'; // Cadena con todas las vocales

    for (let i = 0; i < cadena.length; i++) {
        const char = cadena[i];
        if (vocalesStr.includes(char)) {
            vocales++;
        } else if (!isNaN(char) && char !== ' ') { // Verificar si es un número
            numeros++;
        }
    }

    return { vocales, numeros };
}

function pedirCadena() {
    rl.question("Introduce una cadena de texto: ", (input) => {
        if (input.trim() === "") {
            console.log("La cadena no puede estar vacía. Intenta nuevamente.");
            pedirCadena();
        } else {
            const { vocales, numeros } = contarVocalesYNumeros(input);
            console.log(`Número de vocales: ${vocales}`);
            console.log(`Número de dígitos: ${numeros}`);
            rl.close();
        }
    });
}

pedirCadena();

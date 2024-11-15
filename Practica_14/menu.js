const readline =require('readline')

const createVehicule = require('./create')
const addVehicule = require('./add')
const readVehicule = require('./read')
const modifyVehicule = require('./modify')
const deleteVehicule = require('./delete')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log('\n---Menu---');
    console.log('1. Crear el archivo JSON');
    console.log('2. Leer el archivo JSON');
    console.log('3. Agregar vehiculo');
    console.log('4. Modificar vehiculo');
    console.log('5. Eliminar vehiculo');
    console.log('6. Salir');
}

function handleMenuOptions(option) {
    switch (option) {
        case '1':
            createVehicule()
            break;
        case '2':
            readVehicule()
            break;
        case '3':
            addVehicule()
            break;
        case '4':
            modifyVehicule()
            break;
        case '5':
            deleteVehicule()
            break;
        case '6':
            console.log('Saliendo del programa...');
            rl.close();
            return;
        default:
            console.log('Opcion no válida. Intentelo de nuevo');
            break;
    }
    setTimeout(promptMenu, 1000)
}

function promptMenu() {
    showMenu();
    rl.question('Seleccione una opcion:', handleMenuOptions)
}

promptMenu();
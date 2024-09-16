const procesarPedido = (pedido) => {
    return new Promise((resolve, reject) => {
        console.log(`Procesando pedido para: ${pedido}...`);

        setTimeout(() => {
            const exito = Math.random() > 0.2;

            if (exito) {
                resolve(`Pedido de ${pedido} completado exitosamente.`);
            } else {
                reject(`Error: El pedido de ${pedido} ha fallado.`);
            }
        }, 3000);
    });
};

procesarPedido("Carne Asada")
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error(error);
    });

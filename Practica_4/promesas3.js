function solicitarDatosAlServidor(){
    return new Promise((resolve, reject)=>{
        let exito = true;

        setTimeout(()=>{
        if(exito){
            resolve({
                id:1,
                nombre: "Yony Benitez",
                edad: 18,
            });
        }else{
            reject("Error al obtener los datos del servidor");
        }
        },2000);
    });
}

solicitarDatosAlServidor()
    .then((datos)=>{
        console.log("Datos recibidos", datos);
    })
    .catch((error)=>{
        console.error(error);
    });
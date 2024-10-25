class Usuario {
    constructor(username) {
        this._usarname = username;
    }
    //get obtener el nombre
    get username(){
        return this._usarname
    }
    //set para validar la longitud del username
    set username(username){
        if(username.length >= 3){
            this._usarname = username;
        }else{
            console.log(`El nombre de usuario '${username}' debe tener al menos tres caracteres`)
        }
    }
}
const usuario = new Usuario('Luz')
console.log(`Nombre valido: ${usuario.username}`);

usuario.username = 'Lu'
usuario.username = 'Lupe'
console.log(`Nombre valido: ${usuario.username}`);

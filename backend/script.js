//Registro en la página
let nombre
let crear_Mail
let crear_Contraseña

function Registro(){
nombre = prompt("Ingresa tu Nombre: ")
crear_Mail = prompt("Ingresa una casilla de mail: ")
crear_Contraseña = prompt("Ingresa una contraseña: ")
mail = crear_Mail
alert("Se ha registrado exitosamente el usuario " + mail)
}

Registro()

//Inicio de Sesión
function Inicio_Sesion(){
    let Iniciar_Sesion = prompt("Ingresa tu Mail: ")
    let contraseña

        if (Iniciar_Sesion == mail) {
            contraseña = prompt("Ingresa tu contraseña: ")
            if (contraseña == crear_Contraseña){
                alert("Has ingresado correctamente, bienvenido " + nombre)
            }
            else{alert("La contraseña es incorrecta")}
        }
        else{alert("El mail ingresado es incorrecto")}
}
Inicio_Sesion()

//Nueva Contraseña
function Cambio_Contraseña(){
    let mail_cambio = prompt("Ingresa tu casilla de correo: ")
    let contraseña 
    let nueva_contraseña
}

        
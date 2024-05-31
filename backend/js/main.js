//Registro en la página
let nombre
let mail
let contraseña
let usuario
let nuevoUsuario
let base_Datos = []


function registro() {
    nombre = prompt("Ingresa tu Nombre: ")
    let crear_Mail = prompt("Ingresa una casilla de mail: ")
    let crear_Contraseña = prompt("Ingresa una contraseña: ")

    mail = crear_Mail
    contraseña = crear_Contraseña

    localStorage.setItem("nombre", nombre)
    localStorage.setItem("mail", mail)
    localStorage.setItem("contraseña", contraseña)


    alert("Se ha registrado exitosamente el usuario " + crear_Mail)
}

//Redirigir dsp del registro
function redirigir() {
    registro()

    window.location.href = "login.html"
}

//Iniciar Sesion 
function Inicio_Sesion() {
    let mail_ = document.getElementById("mail_").value
    let contraseña_ = document.getElementById("contraseña_").value
    let mail = localStorage.getItem("mail")
    let contraseña = localStorage.getItem("contraseña")
    let nombre = localStorage.getItem("nombre")

    if (mail === mail_ && contraseña === contraseña_) {
        alert("Has ingresado correctamente, bienvenido " + nombre)
        window.location.href = "ingresado.html"
    } else {
        alert("El usuario o la contraseña ingresada es incorrecta")
    }
}

//Posibilidad de cambiar contraseña luego de iniciar sesion
function Cambio_Contraseña(){
    let mail = localStorage.getItem("mail")
    let contraseña = localStorage.getItem("contraseña")
    let mail_cambio = prompt("Ingresa tu casilla de correo: ") 
    let nueva_contraseña
    let contraseña_

        if (mail_cambio == mail){
            contraseña_ = prompt("Ingresa tu contraseña: ")
            if (contraseña_ == contraseña){
                confirmar = confirm("Estás seguro que deseas modificar tu contraseña?")
                if (confirmar == true){
                    nueva_contraseña = prompt("Ingresa tu nueva contraseña: ")
                    alert("Has cambiado con exito la contraseña")

                    localStorage.setItem("contraseña", nueva_contraseña)
                
                    alert("Serás redirigido, inicia sesión nuevamente")
                    window.location.href = "login.html"

                }else{
                    alert("No se modificó tu contraseña")
                }
            }else{
                alert("La contraseña es incorrecta")}
            } else{  
            alert("El mail ingresado es incorrecto")}
        }

function cambioColor(){
    let color = prompt("¿Que color te gustaria para tu pagina?")

    let body = document.querySelector("body")
    body.style.backgroundColor = color
}
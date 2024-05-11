//PRECIOS DE ECOMMERCE IF-ELSE DESAFIO

let nombreProducto = "fideos"
let precioUnitario = 300
let cantidadDeseada = prompt("¿Cuantos productos llevara de " + nombreProducto)
let total
let descuento
let totaldescuento

if (cantidadDeseada >= 5){
    total = cantidadDeseada * precioUnitario
    descuento = total * 0.10
    totaldescuento = total - descuento 
    alert("El precio total es de " + totaldescuento)
}
else{
    total = cantidadDeseada * 300
    alert("El precio total es de " + total)
}

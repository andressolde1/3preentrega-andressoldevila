/* En el boton calcular costo de envío, debes poner los km que va a recorrer tu paqueteria y en base a ello te arroja un precio del servicio 
if si el viaje supera los 100 km el costo por km es de 30p por km, la function se encuentro en el primer boton de la pagina index.html
*/
document.getElementById("botonjs").addEventListener("click", function() {



    let nombre = String(prompt("Ingresa tu nombre "));
    let apellido = String(prompt("Ingresa tu apellido"));
    let km = Number(prompt("Ingresa el recorrido de tu envío, solo con números"));

    while (nombre == "" || apellido == "" || isNaN(km) || parseInt(nombre) || parseInt(apellido)) {
        alert("Datos erroneos: nombre y apellido solo letras y los km numericos");
        nombre = String(prompt("Ingresa tu nombre "));
        apellido = String(prompt("Ingresa tu apellido"));
        km = Number(prompt("Ingresa el recorrido de tu envío, solo con números"));
    }

    function calculoDeValor(kms, precio) {
        return kms * precio;
    }

    let precioPorKm = 50;

    if (km > 100) {
        precioPorKm = 30;
    }

    let precioTotal = calculoDeValor(km, precioPorKm);
    alert("Pedido a nombre de: " + nombre + " " + apellido + ". Valor del viaje: $" + precioTotal);
})


/* En el boton calcular costo de envío, debes poner los km que va a recorrer tu paqueteria y en base a ello te arroja un precio del servicio 
if si el viaje supera los 100 km el costo por km es de 30p por km, la function se encuentro en el primer boton de la pagina index.html
*/

//Entrega 1
/*document.getElementById("botonjs").addEventListener("click", function() {



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
})*/



//Entrega 2


let nombre = prompt("¡Bienvenido a Sendgo! Por favor, introduce tu nombre:");
alert("Hola, " + nombre + ". Elije el servicio que desees.");

const serviciosDisponibles = [
    { 
        nombre: "Envío Express  en Córdoba",
        precio: 8500,
        descripcion: "Entrega en un tiempo estimado de 3-5 horas."
    },
    { 
        nombre: "Envío Express interior de Córdoba",
        precio: 10000,
        descripcion: "Entrega en un tiempo estimado de 4-6 horas."
    },
    { 
        nombre: "Envío  en Córdoba",
        precio: 5000,
        descripcion: "Entrega en un tiempo estimado de 8-14 horas."
    },
];

const mensajeOpciones = "Estos son nuestros servicios de envío disponibles:\n\n" +
    serviciosDisponibles.map((servicio, index) => {
        return `${index + 1}. ${servicio.nombre} - $${servicio.precio}\n  ${servicio.descripcion}`;
    }).join('\n') +
    "\n\nSelecciona el numero de tu servicio (1-3), o escribe 'salir' para dejar la página:";

function mostrarServicios() {
    let totalCompra = 0;

    do {
        let opcionElegida = prompt(mensajeOpciones);

        switch (opcionElegida) {
            case "1":
            case "2":
            case "3":
                let servicioSeleccionado = serviciosDisponibles[parseInt(opcionElegida) - 1];
                totalCompra += servicioSeleccionado.precio;
                alert("Tú servicio elegido es: " + servicioSeleccionado.nombre + ". " + servicioSeleccionado.descripcion);

                break;
            case "salir":
                alert("Gracias por utilizar Sendgo. ");
                return;
            default:
                alert("Selecciona una opción válida.");
        }

        alert("Total a pagar hasta ahora: $" + totalCompra);

    } while (true);

    let comprarMas = confirm("¿Quieres utilizar algún otro servicio?");
    if (!comprarMas) {
        alert("Gracias por utilizar Sendgo. Total a pagar: $" + totalCompra);
    } else {
        mostrarServicios();
    }
}

mostrarServicios();

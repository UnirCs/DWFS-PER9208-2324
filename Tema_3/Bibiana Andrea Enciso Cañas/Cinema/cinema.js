// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < N; j++) {
            // Nuevo asiento
            fila.push({
                id: idContador++,
                estado: false // Estado inicial libre
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

// Inicializar la matriz de butacas
let butacas = setup();

// Función para sugerir asientos y realizar la reserva
function suggest(numAsientos) {
    let libresfila = [];
    let reservados = new Set();
    let flag = true;

    console.log("Buscando " + numAsientos + " butacas vacías seguidas.");

    // Recorrer las filas desde la más lejana a la pantalla (última fila hacia la primera)
    for (let fila = N - 1; fila >= 0 && flag; fila--) {
        for (let asiento = 0; asiento < N && flag; asiento++) {
            if (!butacas[fila][asiento].estado) {
                libresfila.push(butacas[fila][asiento].id);
            } else {
                libresfila = [];
            }
            if (libresfila.length === numAsientos) {
                console.log("¡Hemos encontrado " + numAsientos + " butacas vacías!");
                flag = false;
                libresfila.forEach(id => {
                    reservados.add(id);
                    butacas[fila][asiento].estado = true;
                });
            }
        }
    }

    console.log("Butacas Reservadas:", reservados);
    actualizarEstadoButacas(); // Actualizar visualización de butacas en la sala
    return reservados;
}

// Función para actualizar el estado visual de las butacas en la sala
function actualizarEstadoButacas() {
    let tablaButacas = document.getElementById("tablaButacas");

    for (let fila = 0; fila < N; fila++) {
        for (let asiento = 0; asiento < N; asiento++) {
            let celda = tablaButacas.rows[fila].cells[asiento + 1]; // +1 para ignorar el th de la fila
            if (butacas[fila][asiento].estado) {
                celda.classList.remove("td__libre");
                celda.classList.add("td__ocupado");
            } else {
                celda.classList.remove("td__ocupado");
                celda.classList.add("td__libre");
            }
        }
    }
}

// Función para manejar la reserva de butacas desde el formulario
document.addEventListener("DOMContentLoaded", function() {
    let tablaButacas = document.getElementById("tablaButacas");

    // Generar dinámicamente las filas y columnas de la tabla
    for (let i = 0; i < N; i++) {
        let fila = document.createElement("tr");
        let encabezado = document.createElement("th");
        encabezado.textContent = "Fila " + (i + 1);
        fila.appendChild(encabezado);
        for (let j = 0; j < N; j++) {
            let celda = document.createElement("td");
            celda.classList.add("td__libre");
            fila.appendChild(celda);
        }
        tablaButacas.appendChild(fila);
    }

    let btnReservar = document.getElementById("btnReservar");
    btnReservar.addEventListener("click", function() {
        let numButacas = parseInt(document.getElementById("numSeats").value);
        suggest(numButacas);
    });
});

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

// Inicializar la matriz
let butacas = setup();
console.log(butacas)
//Inicializar hacientos ocupados o reservados
butacas[5][1].estado = true;
butacas[5][2].estado = true;
butacas[4][3].estado = true;
butacas[4][5].estado = true;

butacas[6][1].estado = true;
butacas[6][2].estado = true;
butacas[7][4].estado = true;
butacas[7][2].estado = true;

// Función para sugerir asientos disponibles
function suggest(numAsientos) {
    let sugeridos = new Set();

    // Recorrer las filas desde la más lejana a la pantalla
    for (let i = N - 1; i >= 0; i--) {
        let filaActual = butacas[i]; // Obtener la fila actual

        let contadorAsientosLibres = 0; // Contador de asientos libres consecutivos
        let inicioSugeridos = null; // Índice de inicio de los asientos sugeridos

        // Recorrer los asientos de la fila actual
        for (let j = 0; j < N; j++) {
            let asiento = filaActual[j];
            if (!asiento.estado) {
                // Si el asiento está libre
                contadorAsientosLibres++;
                if (contadorAsientosLibres === numAsientos) {
                    // Si encontramos suficientes asientos libres consecutivos
                    inicioSugeridos = j - numAsientos + 1;
                    break;
                }
            } else {
                // Reiniciar el contador si encontramos un asiento ocupado
                contadorAsientosLibres = 0;
                inicioSugeridos = null;
            }
        }

        // Agregar los asientos sugeridos al conjunto
        if (inicioSugeridos !== null) {
            for (let k = inicioSugeridos; k < inicioSugeridos + numAsientos; k++) {
                sugeridos.add(filaActual[k].id);
            }
            break;
        }
    }

    return sugeridos;
}

let numAsientos = 5; // Número de asientos que se desea reservar
let asientosSugeridos = suggest(numAsientos);
console.log('Asientos sugeridos:', asientosSugeridos);
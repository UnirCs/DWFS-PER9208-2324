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

// Función para sugerir asientos
function suggest(numAsientos) {
    // Si el número de asientos solicitados excede el tamaño máximo de la fila, devolver un set vacío
    if (numAsientos > N) {
        return new Set();
    }

    // Recorrer las filas desde la más lejana a la pantalla (última fila hacia la primera)
    for (let i = N - 1; i >= 0; i--) {
        let fila = butacas[i];
        let consecutivos = [];

        // Recorrer los asientos en la fila
        for (let j = 0; j < N; j++) {
            if (!fila[j].estado) {
                // Si el asiento está libre, agregarlo a la lista de consecutivos
                consecutivos.push(fila[j].id);
                // Si hemos encontrado suficientes asientos consecutivos, devolver el set con los IDs
                if (consecutivos.length === numAsientos) {
                    return new Set(consecutivos);
                }
            } else {
                // Si encontramos un asiento ocupado, resetear la lista de consecutivos
                consecutivos = [];
            }
        }
    }

    // Si no se encontraron suficientes asientos juntos, devolver un set vacío
    return new Set();
}

// Ejemplo de uso
let numAsientos = 4;
let resultado = suggest(numAsientos);
console.log("Resultado inicial:", resultado); // Imprimir el resultado inicial

// Para probar, puede reservar algunos asientos y volver a llamar a la función
butacas[9][0].estado = true;
butacas[9][1].estado = true;
butacas[9][2].estado = true;

resultado = suggest(numAsientos);
console.log("Resultado después de reservar algunos asientos:", resultado); // Imprimir el resultado después de reservar algunos asientos

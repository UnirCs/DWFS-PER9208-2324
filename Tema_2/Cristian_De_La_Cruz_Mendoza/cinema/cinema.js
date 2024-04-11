// Definir el tamaño de la matriz de butacas
const N = 12; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];
    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        let ocupada = false;
        for (let j = 0; j < N; j++) {

            ocupada = idContador === 134;
            // Nuevo asiento
            fila.push({
                id: idContador++,
                estado: ocupada // Estado inicial libre
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

// Función para sugerir asientos disponibles
function suggest(num_seats) {
    // Inicializar la matriz de butacas
    let butacas = setup();

    // Encontrar asientos disponibles
    let selected_seats = new Set();
    for (let i = N - 1; i >= 0; i--) { // Comenzar desde la última fila (la más lejana a la pantalla)
        let available_seats = [];
        let consecutive_count = 0;
        for (let j = 0; j < N; j++) {
            if (!butacas[i][j].estado) {
                consecutive_count++;
                available_seats.push(butacas[i][j].id);
                if (consecutive_count === num_seats) {
                    selected_seats = new Set([...selected_seats, ...available_seats]);
                    break;
                }
            } else {
                consecutive_count = 0;
                available_seats = [];
            }
        }
        if (selected_seats.size === num_seats) {
            break;
        }
    }

    return selected_seats;
}

console.log(setup())


const reserved_seats = suggest(5);
//console.log(`Asientos reservados: ${[...reserved_seats]}`);

console.log(reserved_seats)

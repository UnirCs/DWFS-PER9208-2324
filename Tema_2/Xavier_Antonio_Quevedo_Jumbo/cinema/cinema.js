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
butacas[0][0].estado = true;
butacas[0][1].estado = true;
butacas[0][2].estado = true;
butacas[0][3].estado = true;
butacas[0][4].estado = true;
butacas[0][5].estado = true;
butacas[0][6].estado = true;
butacas[0][7].estado = true;
butacas[0][8].estado = true;
butacas[0][9].estado = true;


butacas[4][0].estado = false;
butacas[4][3].estado = false;
butacas[6][2].estado = false;
butacas[7][0].estado = false;
butacas[8][7].estado = false;

// Imprimir la matriz
console.log(butacas);

function suggest(numSeats) {
    const suggestedSeats = new Set();
  
    const numRows = butacas.length;
    const numCols = butacas[0].length;
  
    for (let i = numRows - 1; i >= 0; i--) {
      const row = butacas[i];
      let consecutiveSeats = 0;
      let startSeatIndex = -1;
  
      for (let j = 0; j < numCols; j++) {
        if (!row[j].estado) {
          if (consecutiveSeats === 0) {
            startSeatIndex = j;
          }
          consecutiveSeats++;
          if (consecutiveSeats === numSeats) {
            for (let k = startSeatIndex; k < startSeatIndex + numSeats; k++) {
              suggestedSeats.add(row[k].id);
            }
            return suggestedSeats;
          }
        } else {
          consecutiveSeats = 0;
          startSeatIndex = -1;
        }
      }
    }
  
    return suggestedSeats;
  }
  
  const suggestedSeats = suggest(4);
  console.log(suggestedSeats); // Output: Set { 1, 2 }

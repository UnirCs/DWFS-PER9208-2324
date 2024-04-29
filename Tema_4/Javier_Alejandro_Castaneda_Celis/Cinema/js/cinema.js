const N = 10; // Número de filas y columnas

function setup() {
    let idContador = 1;
    let butacas = [];

    for (let i = 0; i < N_FILAS; i++) {
        let fila = [];
        for (let j = 0; j < N_COLUMNAS; j++) {
            fila.push({
                id: idContador++,
                estado: false
            });
        }
        butacas.push(fila);
    }
    let resultSetup = loadOccupied(butacas);
    return resultSetup;
}

function suggest(numAsientos) {
    // Initialize an empty array to store the suggested seat IDs
    let sugeridos = [];
  
    // Get the current state of the seats
    let butacas = setup();
  
    // Check if the input is valid
    if (numAsientos == 0 || isNaN(numAsientos) || numAsientos == null) {
      // Reset the seats to their initial state
      butacas = resetButacas(butacas);
  
      // Return an empty array
      return [];
    }
  
    // Iterate over the rows of seats from back to front
    for (const fila of butacas) {
      // Initialize a counter for the number of consecutive available seats
      let contadorAsientosLibres = 0;
  
      // Initialize a variable to store the starting index of the suggested seats
      let inicioSugeridos = null;
  
      // Iterate over the seats in the current row
      for (let i = 0; i < fila.length; i++) {
        // Get the current seat
        const asiento = fila[i];
  
        // Check if the seat is available
        if (!asiento.estado) {
          // Increment the counter for the number of consecutive available seats
          contadorAsientosLibres++;
  
          // Check if the number of consecutive available seats is equal to the requested number of seats
          if (contadorAsientosLibres === parseInt(numAsientos)) {
            // Set the starting index of the suggested seats
            inicioSugeridos = i - parseInt(numAsientos) + 1;
  
            // Break out of the loop
            break;
          }
        } else {
          // Reset the counter for the number of consecutive available seats
          contadorAsientosLibres = 0;
  
          // Reset the starting index of the suggested seats
          inicioSugeridos = null;
        }
      }
  
      // Check if suggested seats were found
      if (inicioSugeridos !== null) {
        // Add the suggested seat IDs to the suggested seat IDs array
        for (let i = inicioSugeridos; i < inicioSugeridos + parseInt(numAsientos); i++) {
          sugeridos.push(fila[i].id);
        }
  
        // Break out of the loop
        break;
      }
    }
    resetButacas(butacas);
    // Mark the suggested seats as occupied
    sugeridos.map((item) => {
      document.getElementById(parseInt(item)).setAttribute('type', 'occupied');
    });
    console.log(sugeridos);
    // Return the suggested seat IDs array
    return sugeridos;
  }
  
function resetButacas(arrayButacas) {
    for (let i = 0; i < arrayButacas.length; i++) {
        for (let j = 0; j < arrayButacas[i].length; j++) {
            arrayButacas[i][j].estado = false;
            if(document.getElementById(arrayButacas[i][j].id).getAttribute('type') !== 'notAvailable'){
                document.getElementById(arrayButacas[i][j].id).setAttribute('type', 'available');
            }
        }
    }
    return arrayButacas
}

function loadOccupied(arrayButacas) {
    arrayButacas.forEach(element => {
        element.forEach(seat => {
            const seatElement = document.getElementById(seat.id);
            if (seatElement && seatElement.hasAttribute('type')) {
                const seatType = seatElement.getAttribute('type');
                if (seatType === 'notAvailable') {
                    seat.estado = true;
                }
            }
        });
    });
    return arrayButacas;
}

document.addEventListener("DOMContentLoaded", function() {
  var volverCartelera = document.getElementById("registro");
  volverCartelera.addEventListener("click", function(event) {
      event.preventDefault();

      window.location.replace('registro.html');
  });
});
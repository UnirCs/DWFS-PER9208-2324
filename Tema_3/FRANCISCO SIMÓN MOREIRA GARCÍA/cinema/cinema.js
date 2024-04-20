const filasYcolumnas=10;


let butacas;
const setup=()=> {
    let idContador = 1;
    butacas = [];
    for (let i = 0; i < filasYcolumnas; i++) {
        let fila = [];
        for (let j = 0; j < filasYcolumnas; j++) {
            const estadoAleatorio = Math.random() < 0.5;
            fila.push({
                id: idContador++,
                estado: false
            });
        }
        butacas.push(fila);
    }
    return butacas;
}
const contarHabilitadas=(butacas)=> {
    return butacas.flatMap(row => row).filter(seat => !seat.estado).length;
}

let suggest=(nAsientos)=>{
    console.log(nAsientos)
    let butacas = setup();
    let asientosSeleccionados= new Set();
    let cantidadAsientosDisponibles=contarHabilitadas(butacas);
    if(nAsientos>cantidadAsientosDisponibles) console.log("Mess: Supero la cantidad de asientos || Cantidad disponible: " +  cantidadAsientosDisponibles);

    for(let i= butacas.length-1; i>=0; i--) {
        let filaDeAsientos = butacas[i];
        let countAsiento = 0, aux = -1;
        for (let j = 0; j < filaDeAsientos.length; j++) {
            if (!filaDeAsientos[j].estado) {
                countAsiento++;
                if (countAsiento === 1) aux = j;

                if (countAsiento === nAsientos) {
                    for (let k = aux; k <= j; k++) {
                        asientosSeleccionados.add(filaDeAsientos[k].id);
                    }
                    console.log(asientosSeleccionados)
                    return asientosSeleccionados;
                }
                } else {
                    countAsiento = 0;
                    aux = -1;


            }
        }
    }
    console.log(asientosSeleccionados)
    return asientosSeleccionados;
}

suggest(8)


function  execSuggest()
{
    let n=document.getElementById("cantidad").value;
    suggest(Number(n));
}
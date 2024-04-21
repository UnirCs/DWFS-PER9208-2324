const filasYcolumnas=10;
let butacas;
document.addEventListener('DOMContentLoaded', () => {
    butacas = setup();
    generarButacas();
});


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
    butacas[9][9].estado=true;
    butacas[8][9].estado=true;
    return butacas;
}
const generarButacas=()=>{
    let butacas_display = document.getElementById('contenedor__sal__cine');
    let tabla = document.createElement('table');
    tabla.classList.add('table-sm');
   

    for (let i = 0; i < butacas.length; i++) {
        let fila = document.createElement('tr');
        let encabezadoFila = document.createElement('th');
        encabezadoFila.textContent = `Fila ${i + 1}`;
        fila.appendChild(encabezadoFila);

        for (let j = 0; j < butacas[i].length; j++) {
            let div = document.createElement('div');
            let obj = butacas[i][j];
            let celda = document.createElement('td');
            div.textContent = obj.id;
            celda.id = 'butaca_'+obj.id;
            celda.classList.add('puesto');
            if (obj.estado) {
                div.classList.add('no_disponible');
            }
            celda.appendChild(div);
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }

    butacas_display.appendChild(tabla);
}

const dibujarReserva=(asientosSeleccionados)=>{
   
    // let auxButaca;
    // for(let i= butacas.length-1; i>=0; i--) {
    //     let filaDeAsientos = butacas[i];
    //     for (let j = 0; j < filaDeAsientos.length; j++) {
    //         let div = document.createElement('div');
    //         let valor= butacas[i][j].id;
    //         div.textContent = valor;
    //         let butaca=  document.getElementById('butaca_'+valor)
    //             if(asientosSeleccionados.has(valor))
    //                 {
    //                     div.classList.add('preselección');
    //                     butaca.appendChild()
    //                    .innerHTML='<div class="preselección" ></div></td>';
    //                 }
    //                 else if(!butacas[i][j].estado){
    //                     document.getElementById('butaca_'+valor).innerHTML='<div class="" >'+valor+'</div></td>';
    //                 }
                    
    //      }
    //     }

    
    for(let i= butacas.length-1; i>=0; i--) {
        let filaDeAsientos = butacas[i];
        for (let j = 0; j < filaDeAsientos.length; j++) {
            let div = document.createElement('div');
            let valor= butacas[i][j].id;
            div.textContent = valor;
            let butaca=  document.getElementById('butaca_'+valor)
                if(asientosSeleccionados.has(valor))
                    {
                        div.className='preselección';
                       
                       
                    }
                    else if(butacas[i][j].estado){
                        div.className='no_disponible';
                        
                    }
                    butaca.innerHTML = ''; 
                    butaca.appendChild(div)  
         }
        }
 
}

const contarHabilitadas=(butacas)=> {
    return butacas.flatMap(row => row).filter(seat => !seat.estado).length;
}

let suggest=(nAsientos)=>{
    console.log(nAsientos)
 
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
                    dibujarReserva(asientosSeleccionados)
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




function  execSuggest()
{
    let n=document.getElementById("cantidad").value;
    suggest(Number(n));
}
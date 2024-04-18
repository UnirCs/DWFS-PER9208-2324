function setup() {

    let idContador = 1; 
    let butacas = [];

    for (let i = 0; i < N; i++) {

        let fila = [];
        for (let j = 0; j < N; j++) {

            fila.push({
                id: idContador++,
                estado: false 
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

function printButacas(data){
    console.log(data);
}

function updateButacas(){
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            butacas[i][j].estado = Math.random() < 0.5;
        }
    }
}

function suggest(solicitud){

    let contador = 0;
    let temp = [];

    if (solicitud > N) {
        return temp;
    } 

    for(let i = N-1; i > 0; i--){
        for(let j = 0; j < N; j++){
            if(butacas[i][j].estado == false){
                contador++;
                temp.push(butacas[i][j].id);
                if(contador==solicitud){
                    return temp;
                } 
            } else{
                contador = 0;
                temp = [];
            }
        }
    }
}

const N = 10; 
let butacas = setup();
updateButacas();
console.log("Butacas")
printButacas(butacas);
const reserva = suggest(5);
console.log("Sugerencia:")
printButacas(reserva);
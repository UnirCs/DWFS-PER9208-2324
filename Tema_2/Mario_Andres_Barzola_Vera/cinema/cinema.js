// Clase Butacas
class Butacas{
    constructor(id, estado){
        this.id = id;
        this.estado = estado;
    }
    setId(id){
        this.id=id;
    }
    setEstado(estado){
        this.estado=estado;
    }
    getId(){
        return this.id;
    }
    imprimirButaca(){
        if(this.estado===true){
            return " 1";

        }else{
            return " 0";
        }
        
    }
    getEstado(){
        return this.estado;        
    }
    printButaca(){
        return this.id + "," + this.estado;
    }
}

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
            fila.push(new Butacas(idContador++,false)); //creacion de objeto de forma tradicional

        }
        butacas.push(fila);
    }
    return butacas;
}
//funcion aleatoria utilizada por la funcion llenarRandom para generar numeros entre 0 y N
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
//funcion que permite llenar las butacas aleatoriamente, recibe matriz con butacas y la cantidad de asientos a ocupar
function llenarRandom(matriz, cantidad){
    
    for(let i=0; i<N;i++){
        for(let j=0;j<cantidad;j++){
            matriz[i][getRandomInt(0,N)].setEstado(true);
        }
    }

}

// Inicializar la matriz butacas
let butacas = setup();
llenarRandom(butacas,4);//sirve para inicializar (llenar) la matriz de butacas

// Imprimir la matriz
console.log("PANTALLA");
for(let i=0;i<N;i++){
    let pp = "";
    for(let j=0;j<N;j++){
        pp = pp + butacas[i][j].imprimirButaca();
    }
    console.log(pp);
}
console.log("ULTIMA FILA");
console.log("");
console.log("Puestos sugeridos: " + suggest(6));

//funcion que sirve para ocupar asientos segun el argoritmo del ejercicio tema 2
function suggest(cantAsientos){
    let matrizId=[];
    let flag=true;  
    for(let i=N-1;i>-1 && flag===true;i--){
        let pos1= [];
        let it1=false;
        for(let x=N-1;x>0 && cantAsientos<N && it1===false;x--){
            if(cantAsientos===1){
                if(butacas[i][j].getEstado()===false){
                    matrizId.push(butacas[i][j].getId());
                    it1=butacas[i][j].getEstado();
                    flag=butacas[i][j].getEstado();
                }

            }else if(cantAsientos===2){
                it1=!(butacas[i][x].getEstado()) && !(butacas[i][(x-1)].getEstado());
                if(it1===true){
                    for(let a=0;a<cantAsientos;a++){
                        matrizId.push(butacas[i][x-a].getId());
                    }
                    flag=!it1;
                }
            }else if(cantAsientos===3){
                it1=!(butacas[i][x].getEstado()) && !(butacas[i][(x-1)].getEstado()) && !(butacas[i][(x-2)].getEstado());
                if(it1===true){
                    for(let a=0;a<cantAsientos;a++){
                        matrizId.push(butacas[i][x-a].getId());
                    }
                    flag=!it1;
                }

            }else if(cantAsientos===4){
                if((x-1)>=0 && (x-2)>=0 && (x-3)>=0){
                    it1=!(butacas[i][x].getEstado()) && !(butacas[i][(x-1)].getEstado()) && !(butacas[i][(x-2)].getEstado()) && !(butacas[i][(x-3)].getEstado());
                    if(it1===true){
                        for(let a=0;a<cantAsientos;a++){
                            matrizId.push(butacas[i][x-a].getId());
                        }
                        flag=!it1;
                    }
                }else{
                    it1=true;
                }
               
                

            }else if(cantAsientos===5){
                if((x-1)>=0 && (x-2)>=0 && (x-3)>=0 && (x-4)>=0){
                    it1=!(butacas[i][x].getEstado()) && !(butacas[i][(x-1)].getEstado()) && !(butacas[i][(x-2)].getEstado()) && !(butacas[i][(x-3)].getEstado()) && !(butacas[i][(x-4)].getEstado());
                    if(it1===true){
                        for(let a=0;a<cantAsientos;a++){
                            matrizId.push(butacas[i][x-a].getId());
                        }
                        flag=!it1;
                    }

                }else{
                    it1=true;
                }
                

            }else if(cantAsientos===6){
                if((x-1)>=0 && (x-2)>=0 && (x-3)>=0 && (x-4)>=0 && (x-5)>=0){
                    it1=!(butacas[i][x].getEstado()) && !(butacas[i][(x-1)].getEstado()) && !(butacas[i][(x-2)].getEstado()) && !(butacas[i][(x-3)].getEstado()) && !(butacas[i][(x-4)].getEstado()) && !(butacas[i][(x-5)].getEstado());
                    if(it1===true){
                        for(let a=0;a<cantAsientos;a++){
                            matrizId.push(butacas[i][x-a].getId());
                        }
                    flag=!it1;
                    }

                }else{
                    it1=true;
                }
                

            }else if(cantAsientos===7){
                if((x-1)>=0 && (x-2)>=0 && (x-3)>=0 && (x-4)>=0 && (x-5)>=0 && (x-6)>=0){
                    it1=!(butacas[i][x].getEstado()) && !(butacas[i][(x-1)].getEstado()) && !(butacas[i][(x-2)].getEstado()) && !(butacas[i][(x-3)].getEstado()) && !(butacas[i][(x-4)].getEstado()) && !(butacas[i][(x-5)].getEstado()) && !(butacas[i][(x-6)].getEstado());
                    if(it1===true){
                        for(let a=0;a<cantAsientos;a++){
                            matrizId.push(butacas[i][x-a].getId());
                        }
                        flag=!it1;
                    }


                }else{
                    it1=true;
                }

                
            }else if(cantAsientos===8){
                if((x-1)>=0 && (x-2)>=0 && (x-3)>=0 && (x-4)>=0 && (x-5)>=0 && (x-6)>=0 && (x-7)>=0){
                    it1=!(butacas[i][x].getEstado()) && !(butacas[i][(x-1)].getEstado()) && !(butacas[i][(x-2)].getEstado()) && !(butacas[i][(x-3)].getEstado()) && !(butacas[i][(x-4)].getEstado()) && !(butacas[i][(x-5)].getEstado()) && !(butacas[i][(x-6)].getEstado()) && !(butacas[i][(x-7)].getEstado());
                    if(it1===true){
                        for(let a=0;a<cantAsientos;a++){
                            matrizId.push(butacas[i][x-a].getId());
                        }
                        flag=!it1;
                    }

                }else{
                    it1=true;
                }

                

            }else if(cantAsientos===9){
                if((x-1)>=0 && (x-2)>=0 && (x-3)>=0 && (x-4)>=0 && (x-5)>=0 && (x-6)>=0 && (x-7)>=0 && (x-8)>=0){
                    it1=!(butacas[i][x].getEstado()) && !(butacas[i][(x-1)].getEstado()) && !(butacas[i][(x-2)].getEstado()) && !(butacas[i][(x-3)].getEstado()) && !(butacas[i][(x-4)].getEstado()) && !(butacas[i][(x-5)].getEstado()) && !(butacas[i][(x-6)].getEstado()) && !(butacas[i][(x-7)].getEstado()) && !(butacas[i][(x-8)].getEstado());
                    if(it1===true){
                        for(let a=0;a<cantAsientos;a++){
                            matrizId.push(butacas[i][x-a].getId());
                        }
                        flag=!it1;
                    }

                }else{
                    it1=true;
                }
                

            }           
            
        }
    }
    return matrizId;
}
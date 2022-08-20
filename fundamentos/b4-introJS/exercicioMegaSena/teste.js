
let numMegaSena = []
let numAposta = [12,16,5,17,18,22]
let acertos = 0;
for (let y = 0 ; y < 30 ; y++){
    for (let v = 0; v < 6 ; v += 1 ){
        let aleatorio = Math.floor((Math.random() * 60) + 1);
        if(numMegaSena[v] != aleatorio){
        numMegaSena.push(aleatorio);
        }
        console.log[numMegaSena]
    }
}
let numMegaSena = []
let numAposta = [12,16,5,17,18,22]
let acertos = 0;
for (let v = 0; v < 6 ; v += 1 ){
    let aleatorio = Math.floor((Math.random() * 60) + 1);
    while(numMegaSena.includes(aleatorio)){
        aleatorio = Math.floor((Math.random() * 60) + 1)
    }
    numMegaSena.push(aleatorio);
}
console.log(numMegaSena)

for (let c = 0; c < numMegaSena.length; c += 1){
    for(let i = 0; i < numMegaSena.length; i += 1){
        if (numMegaSena[c] === numAposta[i]){
            acertos = acertos + 1;
        }
    }
}
console.log("Você acertou: ", acertos, "Números")
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = '', menorPalavra = '';
let maior = 0, menor = 100000;
for (let c = 0; c < array.length; c ++){

    for(let i = 0; i < array[i].length; i++){
        if (array[c].length > maior){
            maior = array[c].length;
            maiorPalavra = array[c];
        }

        if(array[c].length < menor){
            menor = array[c].length;
            menorPalavra = array[c];
        }

    }
}

console.log(maior);
console.log(maiorPalavra);
console.log(menor)
console.log(menorPalavra)
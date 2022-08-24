let fruits = [3, 4, 10, 1, 12];
let soma = 0;

for(let c = 0; c < fruits.length; c ++){
    soma = soma + fruits[c];
}

if(soma > 15){
    console.log("Valor Final: ", soma)
} else{
    console.log("Valor menor de 15")
}
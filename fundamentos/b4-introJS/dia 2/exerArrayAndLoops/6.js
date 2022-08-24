let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contImpar = 0;
for (let c = 0; c < numbers.length; c ++){
    if (numbers[c] % 2 == 0){
        contImpar++
    }
}
if (contImpar === 0 ){
    console.log("Nenhum valor ímpar encontrado")
}else{
    console.log("Foram ", contImpar, "valores ímpar encontrados")
}
const custo = 500, venda = 800;
let lucro = (venda - (custo*1.2));
console.log(lucro)
if(custo < 0 || venda < 0 || lucro < 0){
    console.log("ERROR, Não pode custar 0 !")
}
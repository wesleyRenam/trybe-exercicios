let idNoel = 40, idElen = 20, idNasc = 20;
let maisNovo = "";
if (idNoel < idElen && idNoel < idNasc){
    maisNovo = "Noel"
} else if(idElen < idNoel && idElen < idNasc){
    maisNovo = "Elen"
} else if (idNasc < idNoel && idNasc < idElen){
    maisNovo = "Nasc"
} else{
    console.log("Alguém tem a idade igual.")
}

console.log(maisNovo, "é a mais nova.")

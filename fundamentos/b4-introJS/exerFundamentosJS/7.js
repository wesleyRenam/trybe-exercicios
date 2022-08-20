let nota = 90;

if (nota >= 90){
    console.log("Tirou A.")
} else if (nota >= 80 && nota < 90){
    console.log("Tirou B.")
} else if (nota >= 70 && nota < 80){
    console.log("Tirou C")
} else if (nota >= 60 && nota < 70){
    console.log("Tirou D")
} else if (nota >= 50 && nota < 60){
    console.log("Tirou E")
}else if(nota < 50){
    console.log ("Tirou F");
}else if (nota > 100 || nota < 0){
    console.log("ERROR! Verifique a Nota.")
}
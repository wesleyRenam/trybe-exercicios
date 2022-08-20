const a = 11, b = 10, c = 9;
if(a > b && a > c){
    console.log("Maior número é o A: ", a)
} else if (b > a && b > c){
    console.log("Maior número é o B: ", b)
} else if(c> a && c > b){
    console.log("Maior número é o C: ", c)
} else{console.log("Tem algum número igual!")}
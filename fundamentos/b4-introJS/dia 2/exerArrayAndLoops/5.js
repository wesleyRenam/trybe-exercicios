let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;
for (var c= 0; c < numbers.length; c ++){
    if(numbers[c] > maior){
        maior = numbers[c]
    }
}
console.log(maior)
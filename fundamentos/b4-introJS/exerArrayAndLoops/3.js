let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0, media = 0;
for (let c = 0; c < numbers.length; c++){
    soma = soma + numbers[c]
}
media = soma / numbers.length;

console.log(media)
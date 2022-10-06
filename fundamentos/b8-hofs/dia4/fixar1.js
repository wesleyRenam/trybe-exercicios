// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Melão', 'Melancia', 'Abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Paçoca', 'LeiteCondensado', 'ChocoBall'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));
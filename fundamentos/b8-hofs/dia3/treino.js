const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const isEven = (number) => number % 2 === 0;
const sumEven = (acc, number) => acc+number;

const sumNum = (arrayNum) => arrayNum.filter(isEven).reduce(sumEven);

console.log(sumNum(numbers))
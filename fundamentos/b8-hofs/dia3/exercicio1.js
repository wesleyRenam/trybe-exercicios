//Utilize o reduce para transformar uma matriz em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    arrays.reduce((acc, cur) => {
        let arrayTot = acc + cur;
        console.log(arrayTot)
    })
  }

  flatten()
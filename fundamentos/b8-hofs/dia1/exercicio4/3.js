const acertos = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostas = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const check = (acertos, respostas) => {
      if (respostas === 'N.A') {
        return 0
      }else if (acertos === respostas){
        return 1
      }else{
        return -0.5
      }
}
const corretor = (acertos,respostas,check) => {
    let pontos = 0;
    for (let i = 0; i < acertos.length; i += 1){
        let retorno = check(acertos[i], respostas[i])
        pontos += retorno
    }
    return pontos;
}

console.log(corretor(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'], ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'], check))
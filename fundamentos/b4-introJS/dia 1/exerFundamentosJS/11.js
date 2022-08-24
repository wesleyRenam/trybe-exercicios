let salario = 3000;
let salarioINSS = null;
let novoSalario = null;
if (salario >= 5189.82){
    salarioINSS = salario - 570.88;
} else if (salario >= 2594.93 && salario < 5189.82){
    salarioINSS = salario*0.89;
} else if(salario >= 1556.94 && salario < 2594.93){
    salarioINSS = salario*0.92;
} else if(salario < 1556.94){
    salarioINSS = salario;
    
}
if(salarioINSS >= 4664.68){
    novoSalario = salarioINSS - ((salarioINSS*0.275)-869.36);
} else if (salarioINSS >= 3751.06 && salarioINSS < 4664.68){
    novoSalario = salarioINSS - ((salarioINSS*0.225)-636.13);
} else if (salarioINSS >= 2826.66 && salarioINSS < 3751.06){
    novoSalario = salarioINSS - ((salarioINSS*0.15)-354.80);
} else if (salarioINSS >= 1903.99 && salarioINSS < 2826.66){
    novoSalario = salarioINSS - ((salarioINSS*0.075)-142.80);
} else if (salarioINSS < 1903.99){
    novoSalario = salarioINSS;
} 
console.log(salarioINSS); 
console.log(novoSalario);
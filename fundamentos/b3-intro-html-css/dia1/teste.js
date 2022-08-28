let tech = ['CSS', 'JS','HTML' ]; 
let nome = 'Jaime'
let tot =[]
techOrg = tech.sort();
if(tech == [] || nome == ''){
    console.log("Vazio!")
}else{
for ( let key in tech){

  tot.push({
    tech: techOrg[key],
    name: nome,
  })

}
console.log(tot)
}



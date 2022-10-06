const geraEmpregado = (name) => {
    let email = `${name.replace(' ', '_').toLowerCase()}@trybe.com`
    return {name, email: email};
}

const newEmployees = (callback) => {
    const employers = {
        id1: callback('Pedro Guerra'),
        id2: callback('Luiza Drumond'),
        id3: callback('Carla Paiva')
    }
    return employers;
  };

console.log(newEmployees(geraEmpregado))
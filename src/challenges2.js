// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13

  const hydrate = (string) => {
    let vetor = /\d+/g;
    
    const result = string.match(vetor);
    let novovetor = [];
    soma = 0;
    
    
      for( let i = 0; i < result.length ; i += 1) {
              let convertido = parseInt(result[i])
              novovetor.push(convertido);
              soma += novovetor[i];
     }
      if ( soma > 1) {
        return `${soma} copos de água`;
      }
      else {
        return `${soma} copo de água`;
      }
     
    }

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

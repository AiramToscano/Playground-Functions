// Desafio 1
function compareTrue(n1, n2) {
  let a = true;
  let b = false;
  if (n1 === a && n2 === a) {
    return a;
  } if (n1 === b || n2 === b) {
    return b;
  }
}
// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let stringseparada = string.split(' ');
  return stringseparada;
}

// Desafio 4
function concatName(array) {
  let [vetor, soma] = [[], []];
  let vetor1 = array[0];
  let vetor3 = [', '];
  for (let i = 0; i < array.length; i += 1) {
    vetor = array[(array.length - 1)];
  }
  for (let i = 0; i < array.length; i += 1) {
    soma = vetor + vetor3 + vetor1;
  }
  return soma;
}

// vetor = array[(array.length - 1) - i] + ', ' + array[0];
// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + (ties * 1);
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let soma = 0;
  const maiorvalor = Math.max(...array);
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === maiorvalor) {
      soma += 1;
    }
  }
  return soma;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posicaocat1 = cat1 - mouse;
  let posicaocat1posito = Math.abs(posicaocat1);
  let posicaocat2 = cat2 - mouse;
  let posicaocat2positivo = Math.abs(posicaocat2);
  let stringcat1 = 'cat1';
  let stringcat2 = 'cat2';
  let stringmouse = 'os gatos trombam e o rato foge';
  if (posicaocat1posito > posicaocat2positivo) {
    return stringcat2;
  } if (posicaocat2positivo > posicaocat1posito) {
    return stringcat1;
  } if (posicaocat2positivo === posicaocat1posito) {
    return stringmouse;
  }
}

// Desafio 8
function fizzBuzz(array) {
  const vetor1 = [];
  array.forEach((element) => {
    if (element % 15 === 0) {
      vetor1.push('fizzBuzz');
    } else if (element % 5 === 0) {
      vetor1.push('buzz');
    } else if (element % 3 === 0) {
      vetor1.push('fizz');
    } else {
      vetor1.push('bug!');
    }
  });
  return vetor1;
}

// // Desafio 9
function encode() {
//   // seu código aqui
}
function decode() {
//   // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};

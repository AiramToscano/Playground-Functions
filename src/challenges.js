// Desafio 1
function compareTrue(n1 , n2) {
  
  var a= true;
  var b= false;

if ( n1 == a && n2 == a) {

  return a;
}

else if ( n1 == b || n2 == a) {

  return b;
}
else {
  return b;
}

}

// Desafio 2
function calcArea(base , altura) {
  let area = (base * altura) /2;
  
  
  return area 
}

// Desafio 3
function splitSentence(string) {
let stringseparada = string.split(" ")

return stringseparada
}


// Desafio 4
function concatName( array) {
  let vetor =[];
for( let i = 0 ; i < array.length; i++){

    vetor = array[(array.length - 1) - i] + ', '+array[0];

 return  vetor;

}

}


// Desafio 5
function footballPoints(wins , ties) {

let pontos = (wins * 3) + (ties * 1);

return pontos 

}

// Desafio 6
function highestCount(array) {

var maior =array[0];
var soma=0;

for( var i =0 ; i < array.length ; i++) {

            if( array[i] > maior){

              maior = array[i];
               
        
        } }

       for ( var j = 0 ; j < array.length ; j ++){

           if( array[j] == maior){

              soma += 1;
           }


       }
       return soma;
      
  }
 



// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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

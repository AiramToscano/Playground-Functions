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
  let area = (base * altura) /2 ;
  
  
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
function catAndMouse(mouse, cat1, cat2) {

let posicaocat1 = cat1 - mouse;
var posicaocat1posito = Math.abs(posicaocat1);
let posicaocat2 = cat2 - mouse;
var posicaocat2positivo = Math.abs(posicaocat2);
let stringcat1 = 'cat1';
let stringcat2 = 'cat2';
let stringmouse = 'os gatos trombam e o rato foge';

if( posicaocat1posito > posicaocat2positivo  ) {

    return stringcat2
}

else if ( posicaocat2positivo > posicaocat1posito ) {

  return stringcat1
}

else if ( posicaocat2positivo == posicaocat1posito) {

   return stringmouse
   
}

}

// Desafio 8
function fizzBuzz(array) {
var novovetor = 0; 

for (let i = 0; i < array.length ; i ++) {

                 if( array[i] % 3 == 0 && array[i]% 5 != 0) {
                 array[i] = 'fizz'}
                 
                 else if( array[i] % 5 == 0 && array[i]% 3 != 0) {
                  array[i] = 'buzz'}
                  
                 else if( array[i] % 3 == 0 && array[i] % 5 == 0) {
                    array[i] = 'fizzBuzz'}
                    
                 else  {
                      array[i] = 'bug!'
                 }
                 
                        
                
                  
                

}
return array
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
}

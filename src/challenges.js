// Desafio 1
function compareTrue(b1,b2) {
  return b1 && b2; //Estava dando erro. O enuciado pede que use apenas o operador &&. Vamos vê se dá certo ¯\_(ツ)_/¯
}
// Desafio 2
function calcArea(base, heigth) { //Defini dois paramentros para minha função;
  return (base*heigth)/2; //Fiz com que a função retorna-se a multiplicação dos dois parâmetros dividido por dois;
}

// Desafio 3
function splitSentence(string) { 
  return string.split(' '); //Retorna o valor do paramento, que deve ser uma string, a partir do método .split, que divide uma string em uma lista ordenada no array; Deu erro por causa de um espaço entre ' ' ?
}

// Desafio 4
function concatName(x1) { //criei um parâmetro
  return x1[x1.length -1]. concat(', ') + x1[0]; // a função retornará o valor do tamanho do array na posição do tamanho dele (length) menos 1 (ou seja, sua última posição) concatenado com o array de posição 0 (ou seja, sua primeira posição);
}

// Desafio 5
function footballPoints(wins, ties) { // declarei parâmetros;
  return (wins*3) + ties; // a função retronará a soma de vitórias (dado que o valor de wins equivale a ele vezes 3) com o de empate;
}

// Desafio 6
function highestCount(numbersArray) { //criei o parametro da função;
  let numbers = numbersArray; //criei uma váriavel que armazena o valor do parâmetro, que por acaso deve ser uma array;
  let higherNumber = Math.max(... numbersArray); //criei uma váriavel que armazena o maior número do array com a proriedade Math.max.apply em sua versão(?) curta Math.max(...arr) =>  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max ;
  let conter = 0; //váriavel que armazenará minha contagem; 
  
    for (let i = 0; i <numbersArray.length; i +=1){ //estutura de repetição que irá enlaçar até o tamanho do meu numbersArray;
      if(numbers[i] === higherNumber){ // condicional que irá passar por todos os valores de numbers na posição i, caso o valor dessa posição seja igual ao meu maior número(higherNumber)...
        conter +=1; //o contador será adicionado 1;
      }
    }
    return conter; // retorna o contador
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) { // criei os parâmetros 
  let cat1Distance = Math.abs(cat1 - mouse); //criei váriael que armazena a distancia do gato 1 até o rato por uma subtração de valores absolutos
  let cat2Distance = Math.abs(cat2 - mouse); //criei váriael que armazena a distancia do gato 2 até o rato por uma subtração de valores absolutos

  if (cat1Distance < cat2Distance){ //condicional que, se o resultado da váriavel cat1Distance for menor que o resultado da váriavel cat2Distance...
    return 'cat1'; //então ele retornará o cat1, por ele ser menor em valor que cat2
    }
    if (cat1Distance > cat2Distance){ //condicional que, se o resultado da váriavel cat1Distance for maior que o resultado da váriavel cat2Distance...
    return 'cat2'; //então ele retornará o cat2, por ele ser menor em valor que cat1
    } 
    return 'os gatos trombam e o rato foge'; // se nenhuma das condicionais efetivadas (nenhum menor que o outro), ela derá esse retorno. 
  }


// Desafio 8
function fizzBuzz(p1) {
  let result = [];

  for(let i = 0; i < p1.length; i+=1){
    if(p1[i] % 3 === 0 && p1[i] % 5 === 0){
      result.push('fizzBuzz');

    } else if (p1 [i] % 3 === 0){
      result.push('fizz');
      
    } else if(p1[i] % 5 === 0){
      result.push('buzz');
      
    } else {
      result.push('bug!')
    }
  }
      return result;
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
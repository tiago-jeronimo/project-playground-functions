// Desafio 1
function compareTrue(b1,b2) {
  return b1 && b2; //Estava dando erro. O enuciado pede que use apenas o operador &&. Vamos vê se dá certo ¯\_(ツ)_/¯
}
// Desafio 2
function calcArea(base, heigth) { //Defini dois paramentros para minha função;
  return (base*heigth)/2 //Fiz com que a função retorna-se a multiplicação dos dois parâmetros dividido por dois;
}

// Desafio 3
function splitSentence(string) { 
  return string.split(' '); //Retorna o valor do paramento, que deve ser uma string, a partir do método .split, que divide uma string em uma lista ordenada no array; Deu erro por causa de um espaço entre ' ' ?
}

// Desafio 4
function concatName(x1) { //criei um parâmetro
  return x1[x1.length -1]. concat(', ') + x1[0] // a função retornará o valor do tamanho do array na posição do tamanho dele (length) menos 1 (ou seja, sua última posição) concatenado com o array de posição 0 (ou seja, sua primeira posição)
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
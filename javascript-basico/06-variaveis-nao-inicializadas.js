/* Entender variáveis não inicializadas */

/*

Quando as variáveis de JavaScript são declaradas, elas têm um valor inicial de undefined. 
Se você fizer uma operação matemática em uma variável undefined, seu resultado será NaN, 
o que significa que "Não é um número". Se você concatenar uma string com uma variável undefined, 
você receberá uma string literal de undefined.

*/

// Exemplo:

var a = 5;
var b = 10;
var c = 'I am a';

a = a + 1; // 5 + 1
console.log(a); // 6
 
b = b + 5;// 10 + 5
console.log(b); // 15

c = c + " String!";  // I am a + String!
console.log(c); // I am a String!

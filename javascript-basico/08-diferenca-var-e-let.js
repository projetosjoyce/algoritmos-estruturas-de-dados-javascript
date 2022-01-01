/* Diferenciar entre as palavras-chave var e let */

/* 
Um dos maiores problemas ao declarar variáveis com a palavra-chave var é que você pode sobrescrever 
facilmente declarações de variável:

var camper = "James";
var camper = "David";
console.log(camper);

No código acima, a variável camper é originalmente declarada com o valor James e então substituída 
pelo valor David. O console, então, vai exibir a string David.

Em uma aplicação pequena, você pode não encontrar esse tipo de problema. Mas à medida que sua base 
de código se tornar maior, você pode sobrescrever acidentalmente uma variável que você não pretendia.
 Como esse comportamento não lança um erro, a busca e correção de bugs tornam-se mais difíceis.

Uma palavra-chave chamada let foi introduzida na ES6, uma grande atualização para o JavaScript, para 
resolver este possível problema com a palavra-chave var. Você vai aprender sobre outros recursos da 
ES6 em desafios posteriores.

Se você substituir var por let no código acima, ele resultará em um erro:

let camper = "James";
let camper = "David";
O erro pode ser visto no console do seu navegador.

Então, diferente de var, ao usar let, uma variável com o mesmo nome só pode ser declarada uma única vez.

*/

//Exemplo:

var nome = "Maria";
var nome = "Ana";
console.log(nome); //Ana

let nome1 = "James";
let nome1 = "David";
console.log(nome1); //erro 


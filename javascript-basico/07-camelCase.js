/* Entender a sensibilidade a caracteres maiúsculos e minúsculos em variáveis */

/*
Em JavaScript todas os nomes de variáveis e funções são sensíveis a caracteres maiúsculos e minúsculos. 
Isso significa que a capitalização importa.

MYVAR não é o mesmo que MyVar nem myvar. É possível ter diversas variáveis distintas com o mesmo 
nome mas com capitalização diferente. É extremamente recomendado pelo bem da clareza, que você não 
use esse recurso da linguagem.

Melhores práticas

Escreva nomes de variáveis em JavaScript em camelCase. Em camelCase, nomes de variáveis com mais 
de uma palavra possuem a primeira palavra toda em minúscula e a primeira letra de cada palavra 
subsequente capitalizada.

*/

//Exemplos:

var someVariable;
console.log(someVariable); // someVariable

var anotherVariableName;
console.log(anotherVariableName); // anotherVariableName

var thisVariableNameIsSoLong;
console.log(thisVariableNameIsSoLong); // thisVariableNameIsSoLong


/**
 * Verifica se a palavra ou texto é um palindromo 
 ** @param {string} A Palavra a ser verificada.
 ** @return {boolean} Restorna True caso seja um palindromo e Falso caso não seja.
 */
function Palindromo(A = ''){
    try{
        A = A.toLowerCase().trim();
        
        return A.length > 1 ? 
        /*Converte a palavra em um array inverte a sequencia 
          e unifica novamente convertendo em uma string*/
        A.split('').reverse().join('') == A 
        : false;
    }catch{
        console.error('A função Palindromo() verifica apenas string, o valor '+A+' é invalido');
    }
}

console.log(Palindromo('arara'));
console.log(Palindromo('121'));
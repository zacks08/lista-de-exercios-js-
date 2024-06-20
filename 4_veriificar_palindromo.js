function verificarPalindromo(palavra){
const palavraInvertida = palavra.split('').reverse().join('');
if (palavra === palavraInvertida)
    return ("A palavra é um palíndromo!");
else
    return ("A palavra não é um palíndromo!");
}
console.log(verificarPalindromo("oi"));







function verificarPalindromo(palavra){
const palavraInvertida = palavra.split('').reverse().join('');
if (palavra === palavraInvertida)
    return ("A palavra é um palíndromo!");
else
    return ("A palavra não é um palíndromo!");
}


// Exemplo de uso
console.log(verificarPalindromo("radar")); // A palavra é um palíndromo!


console.log(verificarPalindromo("teste")); // A palavra não é um palíndromo!    

//polindromo e uma palavra que lida da mesma forma de traz para frente e de frente para traz






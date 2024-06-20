function normalizarString(str) {
    // Remove espaços, pontos e vírgulas e converte para minúsculas
    return str.replace(/[\s.,]/g, '').toLowerCase();
}

function verificarPalindromo(palavra) {
    // Normaliza a palavra antes de processar
    const palavraNormalizada = normalizarString(palavra);
    
    // Inverte a palavra normalizada
    const palavraInvertida = palavraNormalizada.split('').reverse().join('');
    
    // Verifica se a palavra normalizada é igual à sua versão invertida
    if (palavraNormalizada === palavraInvertida)
        return ("A palavra é um palíndromo!");
    else
        return ("A palavra não é um palíndromo!");
}

console.log(verificarPalindromo("A man, a plan, a canal, Panama"));
console.log(verificarPalindromo("oi"));

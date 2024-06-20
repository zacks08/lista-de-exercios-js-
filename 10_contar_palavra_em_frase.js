function countWords(phrase) {
    // Remove pontuações e espaços extras, e divide a frase em palavras
    let words = phrase.trim().replace(/[.,!?;:()]/g, "").split(/\s+/);
    // Retorna o número de palavras
    return words.length;
}

// Exemplo de uso:
let sentence = "caguei uma sopa de letrinhas e agr caguei essas palavras que voce esta lendo";
let wordCount = countWords(sentence);
console.log("Número de palavras:", wordCount);

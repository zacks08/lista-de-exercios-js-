function numero_de_vogais(palavra){
const palavra=/[aeiouAEIOU]/g;
const vogais= palavra.match(palavra);
return vogais ? vogais.length:0;
}

console.log(numero_de_vogais("oiioi"));
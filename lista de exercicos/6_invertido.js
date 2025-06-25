function Inverter(palavra){
const palavraInvertida=palavra.split("").reverse().join("");
return (palavraInvertida);
}
console.log(Inverter("onibus"))
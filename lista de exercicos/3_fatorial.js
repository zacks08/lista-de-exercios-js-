function calcularFatorial (fatorial) {
    if (isNaN(fatorial)) {
        return 'Não existe nada dentro da caixa de texto';//le se existe algun valor no input
    }
     
    if (!Number.isInteger(fatorial) || fatorial < 0) {
        return 'Não existe fatorial de um número não natural,escreva um número natural';//ler se o valor e real ou não
    }
     
    if (fatorial === 0 || fatorial === 1) {//ler se o fatorial e 0 ou 1
        return 1;//se o numero for 0 ou 1,é retornado o numero '1'
    }
     //processamento do fatorial
    var resultado = fatorial;
    var primeiroMultipicador = fatorial - 1;
    for (var i = primeiroMultipicador; i > 1; i--) {
        resultado *= i;
    }
     
    return resultado;//retorna o resultado
}
 
console.log(calcularFatorial(5));


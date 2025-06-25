function pangrama(palavra) {
    var alfabeto = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < palavra.length; i++) {
        if (alfabeto.indexOf(palavra[i]) == -1) 
            return false
    }
    return true
}
console.log(pangrama('rato'))
function armstrong(n) {
    const numStr = n.toString();
    const numDigitos = numStr.length;
    let sum = 0;

    for (let digit of numStr) {
        sum += Math.pow(parseInt(digit), numDigitos);
    }

    return sum === num;
}

console.log(armstrong(153))
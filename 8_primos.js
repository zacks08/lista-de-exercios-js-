function Primos(primo){
if (primo % 2 == 0 || primo % 3 == 0 || primo % 5 == 0 || primo % 7 == 0)
    return ("seu numero não é um primo")
else{
    return ("seu numero é um primo")
}
}
console.log(Primos(77));



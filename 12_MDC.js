function MDC(a,b) {    
    let maior = Math.max(a, b);
    let menor = Math.min(a, b);
    for (let i=maior;;i+=maior){
       if(i%menor===0){
           return i;
       }
    }
}
let a=12;
let b= 8;
let mdc=MDC(a,b);
console.log(`O MMC de ${a} e ${b} é: ${mdc}`);
  
  
  
  
  
  
  
  
  
  



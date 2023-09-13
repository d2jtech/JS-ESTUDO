function parimpar(n){
    if (n%2==0){
        return 'PAR!'
    } else {
        return 'IMPAR!'
    }
}

let n1 = 15
let res = parimpar(n1)

console.log(`O número que foi digitado é: ${n1} e ele é ${res}  `)
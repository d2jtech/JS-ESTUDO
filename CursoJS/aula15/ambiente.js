let num = [5,8,4,10,20,3,8]

for(let pos = 0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log("Uso do FOR IN")

num.sort()

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}



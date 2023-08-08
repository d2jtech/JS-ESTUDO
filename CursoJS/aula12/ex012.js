var idade = 66

if(idade < 16){
    console.log(`Sua idade é ${idade}. Não Vota!`)
} else if (idade < 18 || idade > 65){
    console.log(`Sua idade é ${idade}. Voto Opcional!`)
    } else {
        console.log(`Sua idade é ${idade}. Voto Obrigatório`)
}

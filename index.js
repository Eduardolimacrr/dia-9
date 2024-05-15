let nome = prompt('Insira o seu nome ')
let idade = parseInt(prompt('Insira a sua idade '))
let peso = prompt('Insira seu peso em kg ')
let altura = prompt('Insira sua altura em metros ')
let profissão = prompt('Insira a sua profissão ')

console.log('Olá' + nome + 'você tem' + idade + 'anos, é' + profissão + 'tem' + altura + 'de altura e pesa' + peso + 'kg.')

if(idade >= 18){
    console.log('Você pode beber!')
}else {
    console.log('Você ainda não pode beber.')
} 

let meses = idade * 12
let semanas = idade * 52
let dias = idade * 365

console.log('Sua idade em meses é:' + meses)
console.log('Sua idade em semanas é:' + semanas)
console.log('Sua idade em dias é: ' + dias)

let imc = peso/(altura*altura)

if(imc < 18.5){
    console.log('Magreza')  
} else if (imc >= 18.5 && imc <= 24.9){
    console.log('Normal')
} else if (imc >=25 && imc <= 30){
    console.log('Sobrepeso')
} else {
    console.log('Obesidade')
}

let anoAtual = 2023
let anoNasc = anoAtual - idade
console.log('Você nasceu no ano de' + anoNasc)

let anosVividos = anoNasc
let idadeAtual = 0

for(anosVividos = anoNasc; anosVividos <= anoAtual; anosVividos++){
    console.log(anosVividos + '-' + idadeAtual + 'anos de idade' )
    idadeAtual++
}

do {
    let continuar = prompt('Deseja inserir os dados novamente? (s/n).')
} while (continuar == 's')s



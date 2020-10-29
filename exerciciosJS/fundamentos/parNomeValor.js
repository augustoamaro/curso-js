//par nome/valor
const saudacao = 'Opa' // contexto léxico

function exex() {
    const saudacao = 'Fala tu' //contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Rua tal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exex())
console.log(cliente)

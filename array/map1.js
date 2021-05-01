const nums = [1, 2, 3, 4, 5]

// Map é um FOR com propósito, só que transforma cada um dos elementos de um array para outro
// Tem que ter um retorno

let resultado = nums.map(function(e) {
    return e * 20
})

console.log(resultado) // gera um novo resultado
console.log(nums) 

const soma10 = e => e + 10
const triplo = e => e * 10
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', '.')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
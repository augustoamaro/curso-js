const notas = [6.7, 7.3, 9.5, 8.1, 7.7]

for (let i in notas) {
    console.log(i, notas[1])
}

const pessoa = {
    nome: 'Jack',
    sobrenome: 'Bauer',
    idade: 29,
    peso: 68
}

for (let atributo in pessoa) {
    console.log (`${atributo} = ${pessoa[atributo]}`)
}
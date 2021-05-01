const pilotos = ['Hamilton', 'Bottas', 'Verstapen', 'Norris']
pilotos.pop() // remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Vettel')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Senna') // adiciona ao primeiro elemento da lista
console.log (pilotos)

// splice pode adicionar ou remover elemento dentro de um array
pilotos.splice(2, 0, 'Raikkonen', 'Barrichelo')
console.log(pilotos)

// remover elemento pelo método split
pilotos.splice(3, 1) // retira o terceiro elemento do array 
console.log(pilotos)

const algunPilotos1 = pilotos.slice(2) // retorna um novo array
console.log(algunPilotos1)

const algunPilotos2 = pilotos.slice(1, 4)
console.log(algunPilotos2)
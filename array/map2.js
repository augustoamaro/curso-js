const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

// retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
// transformar as string para objeto
const apenasPreco = produto => produto.preco
// 
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
// chamar o map para extrair apenas o preço
console.log(resultado)
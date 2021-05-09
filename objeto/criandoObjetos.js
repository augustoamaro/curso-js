// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)


// Funções construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const produto1 = new Produto('Caneta', 7.99, 0.15)
const produto2 = new Produto('Notebook', 2999.99, 0.25)
console.log(produto1.getPrecoComDesconto(), produto2.getPrecoComDesconto())

// Função factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome, 
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}


const funcionario2 = criarFuncionario('Predo', 5000, 2)
const funcionario1 = criarFuncionario('João', 8000, 4)
console.log(funcionario1.getSalario(), funcionario2.getSalario());

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna um Objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info);


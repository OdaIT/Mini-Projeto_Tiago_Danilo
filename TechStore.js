//M1 Mini-Projetos

//Opção 1: TechStore (Gestão de Inventário)

class Produto {

    constructor(nome, preco, quantidade, categoria){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        this.categoria = categoria;
    };

    atualizarPreço(novoPreco) {
        this.preco = novoPreco;        
    };

    registarVenda(unidades) {
        this.quantidade -= unidades;       
    };

    reporStock(unidades) {
        this.quantidade += unidades;
    };

    devolucao(unidades) {
        this.quantidade += unidades;
    };

    quebras(unidades) {
        this.quantidade -= unidades;
    };

    desconto(valor) {
        if (valor > 0 && valor < 1) {
            this.preco *= 1 - valor;
        } else {
            console.error("Valor inválido! Precisa ser decimal entre 0 e 1!")
        }       
    };

}
const portatil = new Produto("Portátil", 1000, 3, "Computadores");
const desktop = new Produto("Desktop", 700, 2, "Computadores");
const rato = new Produto("Rato", 15, 10, "Periféricos");
const monitor = new Produto("Monitor", 150, 5, "Periféricos");
const teclado = new Produto("Teclado", 20, 10, "Periféricos");

class Inventario {
    constructor(array){
        this.produtos = array;
        this.historico = [];
    }
    valorInventario(){}
    premium(){}
    limpezaStock(){}
    filtroCategoria(){}
}

const totalProdutos = new Inventario([portatil, desktop, rato, monitor, teclado]);
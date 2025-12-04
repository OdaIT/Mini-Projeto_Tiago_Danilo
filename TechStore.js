//M1 Mini-Projetos

//Opção 1: TechStore (Gestão de Inventário)

class Produto{
    constructor(nome, preco, quantidade, categoria){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        this.categoria = categoria;
    }
    atualizarPreço(){}
    registarVenda(){}
    reporStock(){}
    devolucao(){}
    quebras(){}
    desconto(){}
}
const portatil = new Produto()

class Inventario{
    constructor(array){
        this.produtos = array;
        this.historico = [];
    }
    valorIventario(){}
    premium(){}
    limpezaStock(){}
    filtroCategoria(){}
}


//M1 Mini-Projetos

//Opção 1: TechStore (Gestão de Inventário)

class Inventario{
    constructor(nome, preco, quantidade, categoria){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        this.categoria = categoria;
    }
    atualizarPreço(){}
    registarVenda(){}
    valorIventario(){}
    limpezaStock(){}
    filtroCategoria(){}
    premium(){}
    reporStock(){}
    devolucao(){}
    quebras(){}
    desconto(){}
}
const portatil = new Inventario()

class Historico{
    constructor(produto){
        this.historico = [];
        this.produto = produto;
    }
}


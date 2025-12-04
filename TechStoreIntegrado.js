//M1 Mini-Projetos

//Opção 1: TechStore (Gestão de Inventário)

const historico = {
        operação : [],
        nome : [],
        preco : [],
        quantidade : [] 
}

function registarOperacao(op, nm, prc, qtd) {
    historico.operação.push(op)
    historico.nome.push(nm)
    historico.preco.push(prc)
    historico.quantidade.push(qtd)
}

function mostrarHistorico(){ //Função Criatividade
    for (let i = 0; i < historico.nome.length; i++) {
        console.log(`Operação : ${historico.operação[i]} - Nome do produto : ${historico.nome[i]} - Preço : ${historico.preco[i]} € - Quantidade : ${historico.quantidade[i]}`)
    }
}

function mostrarVendas(){ //Função Criatividade
    let somaVendas = 0;
    for (let i = 0; i < historico.nome.length; i++) {
        if (historico.operação[i] === "Venda"){
            somaVendas += historico.preco[i]
        }
    }
    console.log(`Total de vendas = ${somaVendas} €`)
}


class Produto {

    constructor(nome, preco, quantidade, categoria) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        this.categoria = categoria;
    };

    atualizarPreço(novoPreco) {
        this.preco = novoPreco;       
    };

    registarVenda(unidades) {
        if (this.quantidade >= unidades){
            this.quantidade -= unidades;
            registarOperacao("Venda",this.nome, this.preco*unidades, -unidades)
        } else {
            console.error(`Quantidade indisponível.\nEm stock - ${this.quantidade}`)
        }
    };

    reporStock(unidades) {
        this.quantidade += unidades;
        registarOperacao("Reposicão de stock",this.nome, this.preco*unidades, unidades)
    };

    devolucao(unidades) { //Função Criatividade
        this.quantidade += unidades;
        registarOperacao("Devolução",this.nome, this.preco*unidades, unidades)
    };

    quebras(unidades) { //Função Criatividade
        this.quantidade -= unidades;
        registarOperacao("Quebras",this.nome, 0, -unidades) //preço a 0 porque não é venda, é produto defeituoso ou partido.
    };

}
const portatil = new Produto("Portátil", 1000, 3, "Computadores");
const desktop = new Produto("Desktop", 700, 2, "Computadores");
const rato = new Produto("Rato", 15, 10, "Periféricos");
const monitor = new Produto("Monitor", 150, 5, "Periféricos");
const teclado = new Produto("Teclado", 20, 0, "Periféricos");


class Inventario{

    constructor(array) {
        this.produtos = array;
    }

    valorInventario() {
        let somaProdutos = 0;
        for (let artigo in this.produtos) {//chatgtp sugeriu não usar in pois é má pratica, mas para os casos abaixo era a melhor opção pois necessitavamos do index e não do valor. E era para praticar o in em vez de usar o for default
            if (this.produtos[artigo].quantidade > 0){
                somaProdutos +=  this.produtos[artigo].preco * this.produtos[artigo].quantidade;
            }
        }
        console.log(`O valor total do stock é ${somaProdutos} €`);
    };

    premium() {
        let maiorValor = this.produtos[0].preco;
        let nomeMaiorValor = this.produtos[0].nome;
        for (let unidade in this.produtos) {
            if (this.produtos[unidade].preco > maiorValor){
                maiorValor = this.produtos[unidade].preco;
                nomeMaiorValor = this.produtos[unidade].nome;
            }
        }
        console.log(`O produto de maior valor é ${nomeMaiorValor} com o preço de ${maiorValor} €.`)
    };

    limpezaStock() {
        for (let unidade = this.produtos.length - 1; unidade >= 0; unidade--){  //o chatgtp sugeriu utilizar regressão pois caso um elemento fosse retirado na proxima vez que ele encontrasse um zero ele iria retirar o elemento errado, pois o array tinha mudado de tamanho. Alteração realizada
            if (this.produtos[unidade].quantidade == 0){
                console.log(`O produto ${this.produtos[unidade].nome} foi removido do inventário por não ter stock disponível.`)
                this.produtos.splice(unidade,1);
            }
        }
    };

    limpezaStock2() { //Erro/Bug, indíce tem de começar em 0
        for (let unidade = this.produtos.length; unidade > 0; unidade--){  //o chatgtp sugeriu utilizar regressão pois caso um elemento fosse retirado na proxima vez que ele encontrasse um zero ele iria retirar o elemento errado, pois o array tinha mudado de tamanho. Alteração realizada
            if (this.produtos[unidade].quantidade == 0){
                console.log(`O produto ${this.produtos[unidade].nome} foi removido do inventário por não ter stock disponível.`)
                this.produtos.splice(unidade,1);
            }
        }
    };

    filtroCategoria(categoriaEscolhida) {
        let catExiste = 0;
        for (let unidade in this.produtos) {
            if (this.produtos[unidade].categoria === categoriaEscolhida){
                catExiste ++;
                console.log(`Nome do produto : ${this.produtos[unidade].nome} -> Categoria : ${this.produtos[unidade].categoria}`) 
            }
        }
        if (catExiste == 0) {
            console.log(`A categoria ${categoriaEscolhida} não existe ou está mal escrita.`)
        }
    };
        
    mostrarStock() { //Função Criatividade
        const tabela = []
        for (let unidade in this.produtos) {
            tabela.push({
                nome : this.produtos[unidade].nome,
                preco : this.produtos[unidade].preco,
                quantidade : this.produtos[unidade].quantidade})
        }
        console.table(tabela)
    };
};

const totalProdutos = new Inventario([portatil, desktop, rato, monitor, teclado]);


function main() {
    rato.registarVenda(3)
    rato.registarVenda(5)
    monitor.registarVenda(1)
    portatil.registarVenda(10)
    mostrarHistorico()
    mostrarVendas()
    totalProdutos.premium()
    totalProdutos.valorInventario()
    totalProdutos.limpezaStock()
    totalProdutos.filtroCategoria("Computadores")
    totalProdutos.mostrarStock()
    portatil.registarVenda(2)
    totalProdutos.mostrarStock()
}

main();
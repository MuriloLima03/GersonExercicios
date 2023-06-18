import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Produto from "../modelo/produto";
import Cadastro from "./cadastro";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do Produto`);
        let nomeProduto = this.entrada.receberTexto(`Por favor, digite o nome do produto: `);
        let produto = new Produto(nomeProduto);

      
        this.produtos.push(produto);
        console.log(`Produto cadastrado com sucesso!`);
      }
      
}
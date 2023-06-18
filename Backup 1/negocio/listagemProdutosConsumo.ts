import Cliente from "../modelo/cliente";
import Registro2 from "./registro2";

export default class ListagemProdutosConsumo extends Registro2 {
  private clientes: Array<Cliente>;

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
  }

  public cadastrarRegistro(): void {
  }

  public listarMaisConsumidos(): void {
    console.log("\nLista dos produtos mais consumidos:");

    const produtosConsumidos: { [key: string]: number } = {};

    this.clientes.forEach((cliente: Cliente) => {
      cliente.getProdutosConsumidos.forEach((produto: any) => {
        if (!produtosConsumidos[produto.nome]) {
          produtosConsumidos[produto.nome] = 0;
        }
        produtosConsumidos[produto.nome]++;
      });
    });

    const sortedProdutos = Object.keys(produtosConsumidos).sort(
      (a, b) => produtosConsumidos[b] - produtosConsumidos[a]
    );

    sortedProdutos.forEach((produto, index) => {
      console.log(`${index + 1}. Nome: ${produto}`);
      console.log(`   Quantidade consumida: ${produtosConsumidos[produto]}`);
      console.log("--------------------------------------");
    });

    console.log("\n");
  }
}

import Cliente from "../modelo/cliente";

export default class ListagemClientesConsumo {
  private clientes: Array<Cliente>;

  constructor(clientes: Array<Cliente>) {
    this.clientes = clientes;
  }

  public listarTop10Consumidores(): void {
    console.log("\nLista dos 10 clientes que mais consumiram produtos ou serviços:");
  
    const sortedClientes = this.clientes.sort(
      (a, b) =>
        (b.getProdutosConsumidos.length + b.getServicosConsumidos.length) -
        (a.getProdutosConsumidos.length + a.getServicosConsumidos.length)
    );
  
    const top10Clientes = sortedClientes.slice(0, 10);
  
    top10Clientes.forEach((cliente, index) => {
      console.log(`${index + 1}. Nome: ${cliente.nome}`);
      console.log(`   Produtos consumidos: ${cliente.getProdutosConsumidos.length}`);
      console.log(`   Serviços consumidos: ${cliente.getServicosConsumidos.length}`);
      console.log(
        `   Total consumido: ${
          cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length
        }`
      );
      console.log("--------------------------------------");
    });
  
    console.log("\n");
  }
  
  public listarTop10MenosConsumidores(): void {
    console.log("\nLista dos 10 clientes que menos consumiram produtos ou serviços:");
  
    const sortedClientes = this.clientes.sort(
      (a, b) =>
        (a.getProdutosConsumidos.length + a.getServicosConsumidos.length) -
        (b.getProdutosConsumidos.length + b.getServicosConsumidos.length)
    );
  
    const top10Clientes = sortedClientes.slice(0, 10);
  
    top10Clientes.forEach((cliente, index) => {
      console.log(`${index + 1}. Nome: ${cliente.nome}`);
      console.log(`   Produtos consumidos: ${cliente.getProdutosConsumidos.length}`);
      console.log(`   Serviços consumidos: ${cliente.getServicosConsumidos.length}`);
      console.log(
        `   Total consumido: ${
          cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length
        }`
      );
      console.log("--------------------------------------");
    });
  
    console.log("\n");
  }
}  
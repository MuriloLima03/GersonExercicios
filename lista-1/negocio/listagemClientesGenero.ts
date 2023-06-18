import Cliente from "../modelo/cliente";

export default class ListagemClientesGenero {
  private clientes: Array<Cliente>;

  constructor(clientes: Array<Cliente>) {
    this.clientes = clientes;
  }

  public listarPorGenero(): void {
    console.log("\nLista de clientes agrupados por gênero:");

    const clientesPorGenero: { [key: string]: Array<Cliente> } = {};

    this.clientes.forEach((cliente) => {
      if (!clientesPorGenero[cliente.getGenero.getGenero()]) {
        clientesPorGenero[cliente.getGenero.getGenero()] = [];
      }
      clientesPorGenero[cliente.getGenero.getGenero()].push(cliente);
    });

    Object.keys(clientesPorGenero).forEach((genero) => {
      console.log(`Gênero: ${genero}`);
      console.log("--------------------------------------");

      clientesPorGenero[genero].forEach((cliente) => {
        console.log(`Nome: ${cliente.nome}`);
      });

      console.log("\n");
    });
  }
}

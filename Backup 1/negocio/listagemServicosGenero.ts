import Cliente from "../modelo/cliente";
import Servico from "../modelo/servico";

export default class ListagemServicosGenero {
  private clientes: Array<Cliente>;

  constructor(clientes: Array<Cliente>) {
    this.clientes = clientes;
  }

  public listarServicosPorGenero(): void {
    console.log("\nLista dos serviços por gênero:");

    const servicosPorGenero: { [key: string]: { [key: string]: number } } = {};

    this.clientes.forEach((cliente) => {
        const genero = cliente.getGenero.getGenero();


      cliente.getServicosConsumidos.forEach((servico: Servico) => {
        if (!servicosPorGenero[genero]) {
          servicosPorGenero[genero] = {};
        }

        if (!servicosPorGenero[genero][servico.nome]) {
          servicosPorGenero[genero][servico.nome] = 0;
        }

        servicosPorGenero[genero][servico.nome]++;
      });
    });

    Object.keys(servicosPorGenero).forEach((genero) => {
      console.log(`Gênero: ${genero}`);
      console.log("--------------------------------------");

      const servicosConsumidos = servicosPorGenero[genero];

      const sortedServicos = Object.keys(servicosConsumidos).sort(
        (a, b) => servicosConsumidos[b] - servicosConsumidos[a]
      );

      sortedServicos.forEach((servico, index) => {
        console.log(`${index + 1}. Nome: ${servico}`);
        console.log(`   Quantidade consumida: ${servicosConsumidos[servico]}`);
        console.log("--------------------------------------");
      });

      console.log("\n");
    });
  }
}

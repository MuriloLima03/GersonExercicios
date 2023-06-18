import Cliente from "../modelo/cliente";
import Registro2 from "./registro2";

export default class ListagemServicosConsumo extends Registro2 {
  private clientes: Array<Cliente>;

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
  }

  public cadastrarRegistro(): void {
  }

  public listarMaisConsumidos(): void {
    console.log("\nLista dos serviços mais consumidos:");
  
    const servicosConsumidos: { [key: string]: number } = {};
  
    this.clientes.forEach((cliente: Cliente) => {
      cliente.getServicosConsumidos.forEach((servico: any) => {
        if (!servicosConsumidos[servico.nome]) {
          servicosConsumidos[servico.nome] = 0;
        }
        servicosConsumidos[servico.nome]++;
      });
    });
  
    const sortedServicos = Object.keys(servicosConsumidos).sort(
      (a, b) => servicosConsumidos[b] - servicosConsumidos[a]
    );
  
    sortedServicos.forEach((servico, index) => {
      console.log(`${index + 1}. Nome: ${servico}`);
      console.log(`   Quantidade consumida: ${servicosConsumidos[servico]}`);
      console.log("--------------------------------------");
    });
  
    console.log("\n");
  }
}  
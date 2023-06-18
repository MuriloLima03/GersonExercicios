import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Registro2 from "./registro2";
import Servico from "../modelo/servico";
import Produto from "../modelo/produto";

export default class Registro extends Registro2 {
  private clientes: Array<Cliente>;
  private entrada: Entrada;

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
    this.entrada = new Entrada();
  }

  public cadastrarRegistro(tipoRegistro: string): void {
    console.log(`\nInício do registro de consumo`);

    const nomeCliente = this.entrada.receberTexto(`Por favor, informe o nome do cliente: `);
    const cliente = this.buscarCliente(nomeCliente);

    if (!cliente) {
      console.log(`Cliente não encontrado. O registro de consumo não pode ser realizado.\n`);
      return;
    }

    let nomeProduto: string;

    if (tipoRegistro === "produto") {
      nomeProduto = this.entrada.receberTexto(`Por favor, informe o nome do produto: `);
      const produto = new Produto(nomeProduto);
      cliente.registrarConsumo(produto);
    } else if (tipoRegistro === "servico") {
      nomeProduto = this.entrada.receberTexto(`Por favor, informe o nome do serviço: `);
      const servico = new Servico(nomeProduto);
      cliente.registrarConsumo(servico);
    } else {
      console.log(`Tipo de registro inválido. O registro de consumo não pode ser realizado.\n`);
      return;
    }

    console.log(`Registro de consumo realizado com sucesso.\n`);
  }

  private buscarCliente(nome: string): Cliente | undefined {
    return this.clientes.find((cliente) => cliente.nome === nome);
  }
}

import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Genero, { GeneroEnum } from "../modelo/genero";
import Cadastro from "./cadastro";
import RG from "../modelo/rg";

export default class CadastroCliente extends Cadastro {
  private clientes: Array<Cliente>;
  private entrada: Entrada;

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
    this.entrada = new Entrada();
  }

  public cadastrar(): void {
    console.log(`\nInício do cadastro do cliente`);

    let nome = this.entrada.receberTexto(`Por favor, informe o nome do cliente: `);
    let nomeSocial = this.entrada.receberTexto(`Por favor, informe o nome social do cliente: `);
    let valor = this.entrada.receberTexto(`Por favor, informe o número do CPF: `);
    let data = this.entrada.receberTexto(`Por favor, informe a data de emissão do CPF no padrão dd/mm/yyyy: `);
    let partesData = data.split('/');
    let ano = Number(partesData[2]);
    let mes = Number(partesData[1]);
    let dia = Number(partesData[0]);
    let dataEmissao = new Date(ano, mes - 1, dia);
    let cpf = new CPF(valor, dataEmissao);

    let generoOpcoes = Object.values(GeneroEnum).join(', ');
    let generoTexto = this.entrada.receberTexto(`Por favor, informe o gênero do cliente (${generoOpcoes}): `);
    let generoValor = GeneroEnum[generoTexto.toUpperCase() as keyof typeof GeneroEnum];
    let rgValor = this.entrada.receberTexto(`Por favor, informe o número do RG: `);
    
    let rgData = this.entrada.receberTexto(`Por favor, informe a data de emissão do RG no padrão dd/mm/yyyy: `);
    let rgPartesData = rgData.split('/');
    let rgAno = Number(rgPartesData[2]);
    let rgMes = Number(rgPartesData[1]);
    let rgDia = Number(rgPartesData[0]);
    let rgDataEmissao = new Date(rgAno, rgMes - 1, rgDia);
    let rg = new RG(rgValor, rgDataEmissao);

    let cliente = new Cliente(nome, nomeSocial, cpf, new Genero(generoValor));
    cliente.setRg(rg); 
    if (generoValor !== undefined) {
      this.clientes.push(cliente);

      console.log(`\nCadastro concluído :)\n`);
    } else {
      console.log(`Gênero inválido. O valor informado não está dentro das opções permitidas.`);
    }
  }
}

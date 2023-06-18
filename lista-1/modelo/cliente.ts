import CPF from "./cpf";
import Produto from "./produto";
import RG from "./rg";
import Servico from "./servico";
import Telefone from "./telefone";
import Genero, { GeneroEnum } from "../modelo/genero";

export default class Cliente {
  public nome: string;
  public nomeSocial: string;
  private cpf: CPF;
  private rg: RG | null;
  private rgs: Array<RG>;
  private dataCadastro: Date;
  public genero: Genero;
  private telefones: Array<Telefone>;
  private produtosConsumidos: Array<Produto>;
  private servicosConsumidos: Array<Servico>;

  constructor(nome: string, nomeSocial: string, cpf: CPF, genero: Genero) {
    this.nome = nome;
    this.nomeSocial = nomeSocial;
    this.cpf = cpf;
    this.rg = null;
    this.rgs = [];
    this.dataCadastro = new Date();
    this.telefones = [];
    this.produtosConsumidos = [];
    this.servicosConsumidos = [];
    this.genero = genero;
  }

  public get getCpf(): CPF {
    return this.cpf;
  }

  public get getRg(): RG | null {
    return this.rg;
  }

  public setRg(rg: RG): void {
    this.rg = rg;
  }

  public get getRgs(): Array<RG> {
    return this.rgs;
  }

  public get getDataCadastro(): Date {
    return this.dataCadastro;
  }

  public get getTelefones(): Array<Telefone> {
    return this.telefones;
  }

  public get getProdutosConsumidos(): Array<Produto> {
    return this.produtosConsumidos;
  }

  public get getServicosConsumidos(): Array<Servico> {
    return this.servicosConsumidos;
  }

  public get getGenero(): Genero {
    return this.genero;
  }

  public registrarConsumo(consumo: Produto | Servico): void {
    if (consumo instanceof Produto) {
      this.produtosConsumidos.push(consumo);
    } else if (consumo instanceof Servico) {
      this.servicosConsumidos.push(consumo);
    }
  }
}

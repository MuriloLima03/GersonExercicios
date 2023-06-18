import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Genero, { GeneroEnum } from "../modelo/genero";

export default class SelecionadorCliente {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public selecionar(cpf: string) {
        let cpfVazio = new CPF("", new Date());
        let genero = new Genero(GeneroEnum.MASCULINO); // Exemplo de criação de instância de Genero
        let clienteAlvo = new Cliente("", "", cpfVazio, genero);

        this.clientes.forEach((cliente) => {
            if (cpf === cliente.getCpf.getValor) {
                clienteAlvo = cliente;
            }
        });

        return clienteAlvo;
    }
}
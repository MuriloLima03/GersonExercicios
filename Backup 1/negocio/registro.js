"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const registro2_1 = __importDefault(require("./registro2"));
const servico_1 = __importDefault(require("../modelo/servico"));
const produto_1 = __importDefault(require("../modelo/produto"));
class Registro extends registro2_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    cadastrarRegistro(tipoRegistro) {
        console.log(`\nInício do registro de consumo`);
        const nomeCliente = this.entrada.receberTexto(`Por favor, informe o nome do cliente: `);
        const cliente = this.buscarCliente(nomeCliente);
        if (!cliente) {
            console.log(`Cliente não encontrado. O registro de consumo não pode ser realizado.\n`);
            return;
        }
        let nomeProduto;
        if (tipoRegistro === "produto") {
            nomeProduto = this.entrada.receberTexto(`Por favor, informe o nome do produto: `);
            const produto = new produto_1.default(nomeProduto);
            cliente.registrarConsumo(produto);
        }
        else if (tipoRegistro === "servico") {
            nomeProduto = this.entrada.receberTexto(`Por favor, informe o nome do serviço: `);
            const servico = new servico_1.default(nomeProduto);
            cliente.registrarConsumo(servico);
        }
        else {
            console.log(`Tipo de registro inválido. O registro de consumo não pode ser realizado.\n`);
            return;
        }
        console.log(`Registro de consumo realizado com sucesso.\n`);
    }
    buscarCliente(nome) {
        return this.clientes.find((cliente) => cliente.nome === nome);
    }
}
exports.default = Registro;

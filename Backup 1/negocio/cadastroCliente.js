"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const cliente_1 = __importDefault(require("../modelo/cliente"));
const cpf_1 = __importDefault(require("../modelo/cpf"));
const genero_1 = __importStar(require("../modelo/genero"));
const cadastro_1 = __importDefault(require("./cadastro"));
const rg_1 = __importDefault(require("../modelo/rg"));
class CadastroCliente extends cadastro_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    cadastrar() {
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
        let cpf = new cpf_1.default(valor, dataEmissao);
        let generoOpcoes = Object.values(genero_1.GeneroEnum).join(', ');
        let generoTexto = this.entrada.receberTexto(`Por favor, informe o gênero do cliente (${generoOpcoes}): `);
        let generoValor = genero_1.GeneroEnum[generoTexto.toUpperCase()];
        let rgValor = this.entrada.receberTexto(`Por favor, informe o número do RG: `);
        let rgData = this.entrada.receberTexto(`Por favor, informe a data de emissão do RG no padrão dd/mm/yyyy: `);
        let rgPartesData = rgData.split('/');
        let rgAno = Number(rgPartesData[2]);
        let rgMes = Number(rgPartesData[1]);
        let rgDia = Number(rgPartesData[0]);
        let rgDataEmissao = new Date(rgAno, rgMes - 1, rgDia);
        let rg = new rg_1.default(rgValor, rgDataEmissao);
        let cliente = new cliente_1.default(nome, nomeSocial, cpf, new genero_1.default(generoValor));
        cliente.setRg(rg); // Set the RG for the cliente
        if (generoValor !== undefined) {
            this.clientes.push(cliente);
            console.log(`\nCadastro concluído :)\n`);
        }
        else {
            console.log(`Gênero inválido. O valor informado não está dentro das opções permitidas.`);
        }
    }
}
exports.default = CadastroCliente;

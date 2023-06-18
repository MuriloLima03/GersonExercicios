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
const cliente_1 = __importDefault(require("../modelo/cliente"));
const cpf_1 = __importDefault(require("../modelo/cpf"));
const genero_1 = __importStar(require("../modelo/genero"));
class SelecionadorCliente {
    constructor(clientes) {
        this.clientes = clientes;
    }
    selecionar(cpf) {
        let cpfVazio = new cpf_1.default("", new Date());
        let genero = new genero_1.default(genero_1.GeneroEnum.MASCULINO); // Exemplo de criação de instância de Genero
        let clienteAlvo = new cliente_1.default("", "", cpfVazio, genero);
        this.clientes.forEach((cliente) => {
            if (cpf === cliente.getCpf.getValor) {
                clienteAlvo = cliente;
            }
        });
        return clienteAlvo;
    }
}
exports.default = SelecionadorCliente;

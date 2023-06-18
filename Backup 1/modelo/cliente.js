"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const produto_1 = __importDefault(require("./produto"));
const servico_1 = __importDefault(require("./servico"));
class Cliente {
    constructor(nome, nomeSocial, cpf, genero) {
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
    get getCpf() {
        return this.cpf;
    }
    get getRg() {
        return this.rg;
    }
    setRg(rg) {
        this.rg = rg;
    }
    get getRgs() {
        return this.rgs;
    }
    get getDataCadastro() {
        return this.dataCadastro;
    }
    get getTelefones() {
        return this.telefones;
    }
    get getProdutosConsumidos() {
        return this.produtosConsumidos;
    }
    get getServicosConsumidos() {
        return this.servicosConsumidos;
    }
    get getGenero() {
        return this.genero;
    }
    registrarConsumo(consumo) {
        if (consumo instanceof produto_1.default) {
            this.produtosConsumidos.push(consumo);
        }
        else if (consumo instanceof servico_1.default) {
            this.servicosConsumidos.push(consumo);
        }
    }
}
exports.default = Cliente;

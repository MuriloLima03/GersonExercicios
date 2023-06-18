"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const produto_1 = __importDefault(require("../modelo/produto"));
const cadastro_1 = __importDefault(require("./cadastro"));
class CadastroProduto extends cadastro_1.default {
    constructor(produtos) {
        super();
        this.produtos = produtos;
        this.entrada = new entrada_1.default();
    }
    cadastrar() {
        console.log(`\nInício do cadastro do Produto`);
        let nomeProduto = this.entrada.receberTexto(`Por favor, digite o nome do produto: `);
        let produto = new produto_1.default(nomeProduto);
        this.produtos.push(produto);
        console.log(`Produto cadastrado com sucesso!`);
    }
}
exports.default = CadastroProduto;

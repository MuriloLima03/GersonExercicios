"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const registro2_1 = __importDefault(require("./registro2"));
class ListagemProdutosConsumo extends registro2_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
    }
    cadastrarRegistro() {
        // Implemente a lógica de cadastro de registro aqui
        // ...
    }
    listarMaisConsumidos() {
        console.log("\nLista dos produtos mais consumidos:");
        const produtosConsumidos = {};
        this.clientes.forEach((cliente) => {
            cliente.getProdutosConsumidos.forEach((produto) => {
                if (!produtosConsumidos[produto.nome]) {
                    produtosConsumidos[produto.nome] = 0;
                }
                produtosConsumidos[produto.nome]++;
            });
        });
        const sortedProdutos = Object.keys(produtosConsumidos).sort((a, b) => produtosConsumidos[b] - produtosConsumidos[a]);
        sortedProdutos.forEach((produto, index) => {
            console.log(`${index + 1}. Nome: ${produto}`);
            console.log(`   Quantidade consumida: ${produtosConsumidos[produto]}`);
            console.log("--------------------------------------");
        });
        console.log("\n");
    }
}
exports.default = ListagemProdutosConsumo;

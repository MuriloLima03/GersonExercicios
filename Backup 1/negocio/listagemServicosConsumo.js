"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const registro2_1 = __importDefault(require("./registro2"));
class ListagemServicosConsumo extends registro2_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
    }
    cadastrarRegistro() {
        // Implement the registration logic here
        // ...
    }
    listarMaisConsumidos() {
        console.log("\nLista dos serviços mais consumidos:");
        const servicosConsumidos = {};
        this.clientes.forEach((cliente) => {
            cliente.getServicosConsumidos.forEach((servico) => {
                if (!servicosConsumidos[servico.nome]) {
                    servicosConsumidos[servico.nome] = 0;
                }
                servicosConsumidos[servico.nome]++;
            });
        });
        const sortedServicos = Object.keys(servicosConsumidos).sort((a, b) => servicosConsumidos[b] - servicosConsumidos[a]);
        sortedServicos.forEach((servico, index) => {
            console.log(`${index + 1}. Nome: ${servico}`);
            console.log(`   Quantidade consumida: ${servicosConsumidos[servico]}`);
            console.log("--------------------------------------");
        });
        console.log("\n");
    }
}
exports.default = ListagemServicosConsumo;

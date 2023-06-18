"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListagemServicosGenero {
    constructor(clientes) {
        this.clientes = clientes;
    }
    listarServicosPorGenero() {
        console.log("\nLista dos serviços por gênero:");
        const servicosPorGenero = {};
        this.clientes.forEach((cliente) => {
            const genero = cliente.getGenero.getGenero();
            cliente.getServicosConsumidos.forEach((servico) => {
                if (!servicosPorGenero[genero]) {
                    servicosPorGenero[genero] = {};
                }
                if (!servicosPorGenero[genero][servico.nome]) {
                    servicosPorGenero[genero][servico.nome] = 0;
                }
                servicosPorGenero[genero][servico.nome]++;
            });
        });
        Object.keys(servicosPorGenero).forEach((genero) => {
            console.log(`Gênero: ${genero}`);
            console.log("--------------------------------------");
            const servicosConsumidos = servicosPorGenero[genero];
            const sortedServicos = Object.keys(servicosConsumidos).sort((a, b) => servicosConsumidos[b] - servicosConsumidos[a]);
            sortedServicos.forEach((servico, index) => {
                console.log(`${index + 1}. Nome: ${servico}`);
                console.log(`   Quantidade consumida: ${servicosConsumidos[servico]}`);
                console.log("--------------------------------------");
            });
            console.log("\n");
        });
    }
}
exports.default = ListagemServicosGenero;

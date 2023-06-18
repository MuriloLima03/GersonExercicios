"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListagemClientesGenero {
    constructor(clientes) {
        this.clientes = clientes;
    }
    listarPorGenero() {
        console.log("\nLista de clientes agrupados por gênero:");
        const clientesPorGenero = {};
        this.clientes.forEach((cliente) => {
            if (!clientesPorGenero[cliente.getGenero.getGenero()]) {
                clientesPorGenero[cliente.getGenero.getGenero()] = [];
            }
            clientesPorGenero[cliente.getGenero.getGenero()].push(cliente);
        });
        Object.keys(clientesPorGenero).forEach((genero) => {
            console.log(`Gênero: ${genero}`);
            console.log("--------------------------------------");
            clientesPorGenero[genero].forEach((cliente) => {
                console.log(`Nome: ${cliente.nome}`);
            });
            console.log("\n");
        });
    }
}
exports.default = ListagemClientesGenero;

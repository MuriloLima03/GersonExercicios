"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListagemProdutosGenero {
    constructor(clientes) {
        this.clientes = clientes;
    }
    listarMaisConsumidosPorGenero() {
        console.log("\nLista dos produtos mais consumidos por gênero:");
        const produtosConsumidosPorGenero = {};
        this.clientes.forEach((cliente) => {
            cliente.getProdutosConsumidos.forEach((produto) => {
                if (!produtosConsumidosPorGenero[cliente.getGenero.getGenero()]) {
                    produtosConsumidosPorGenero[cliente.getGenero.getGenero()] = {};
                }
                if (!produtosConsumidosPorGenero[cliente.getGenero.getGenero()][produto.nome]) {
                    produtosConsumidosPorGenero[cliente.getGenero.getGenero()][produto.nome] = 0;
                }
                produtosConsumidosPorGenero[cliente.getGenero.getGenero()][produto.nome]++;
            });
        });
        Object.keys(produtosConsumidosPorGenero).forEach((genero) => {
            console.log(`Gênero: ${genero}`);
            console.log("--------------------------------------");
            const produtosConsumidos = produtosConsumidosPorGenero[genero];
            const sortedProdutos = Object.keys(produtosConsumidos).sort((a, b) => produtosConsumidos[b] - produtosConsumidos[a]);
            sortedProdutos.forEach((produto, index) => {
                console.log(`${index + 1}. Nome: ${produto}`);
                console.log(`   Quantidade consumida: ${produtosConsumidos[produto]}`);
                console.log("--------------------------------------");
            });
            console.log("\n");
        });
    }
}
exports.default = ListagemProdutosGenero;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExcluidorCliente {
    constructor(clientes) {
        this.clientes = clientes;
    }
    excluir(clienteAlvo) {
        this.clientes.forEach(cliente => {
            if (cliente.nome === clienteAlvo.nome) {
                let indice = this.clientes.indexOf(cliente);
                delete this.clientes[indice];
            }
        });
    }
}
exports.default = ExcluidorCliente;

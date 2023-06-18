"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RG {
    constructor(valor, dataEmissao) {
        this.valor2 = valor;
        this.dataEmissao = dataEmissao;
    }
    get getValor() {
        return this.valor2;
    }
    get getDataEmissao() {
        return this.dataEmissao;
    }
}
exports.default = RG;

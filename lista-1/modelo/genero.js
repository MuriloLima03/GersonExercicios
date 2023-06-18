"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneroEnum = void 0;
var GeneroEnum;
(function (GeneroEnum) {
    GeneroEnum["MASCULINO"] = "Masculino";
    GeneroEnum["FEMININO"] = "Feminino";
    GeneroEnum["OUTRO"] = "Outro";
})(GeneroEnum || (exports.GeneroEnum = GeneroEnum = {}));
class Genero {
    constructor(genero) {
        this.genero = genero;
    }
    getGenero() {
        return this.genero;
    }
}
exports.default = Genero;

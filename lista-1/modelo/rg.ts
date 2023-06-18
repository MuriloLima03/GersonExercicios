export default class RG {
    private valor2: string
    private dataEmissao: Date
    constructor(valor: string, dataEmissao: Date) {
        this.valor2 = valor
        this.dataEmissao = dataEmissao
    }
    public get getValor(): string {
        return this.valor2
    }
    public get getDataEmissao(): Date {
        return this.dataEmissao
    }
}
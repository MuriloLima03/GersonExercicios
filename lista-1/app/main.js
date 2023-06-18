"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const empresa_1 = __importDefault(require("../modelo/empresa"));
const cadastroCliente_1 = __importDefault(require("../negocio/cadastroCliente"));
const cadastroProduto_1 = __importDefault(require("../negocio/cadastroProduto"));
const excluidorCliente_1 = __importDefault(require("../negocio/excluidorCliente"));
const listagemClientes_1 = __importDefault(require("../negocio/listagemClientes"));
const listagemProdutos_1 = __importDefault(require("../negocio/listagemProdutos"));
const selecionadorCliente_1 = __importDefault(require("../negocio/selecionadorCliente"));
const listagemClientesConsumo_1 = __importDefault(require("../negocio/listagemClientesConsumo"));
const listagemClientesGenero_1 = __importDefault(require("../negocio/listagemClientesGenero"));
const listagemProdutosGenero_1 = __importDefault(require("../negocio/listagemProdutosGenero"));
const listagemProdutosConsumo_1 = __importDefault(require("../negocio/listagemProdutosConsumo"));
const registro_1 = __importDefault(require("../negocio/registro"));
const cadastroServico_1 = __importDefault(require("../negocio/cadastroServico"));
const listagemServicos_1 = __importDefault(require("../negocio/listagemServicos"));
const listagemServicosConsumo_1 = __importDefault(require("../negocio/listagemServicosConsumo"));
const listagemServicosGenero_1 = __importDefault(require("../negocio/listagemServicosGenero"));
console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`);
let empresa = new empresa_1.default();
let execucao = true;
while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Cadastrar produto`);
    console.log(`4 - Listar todos os produtos`);
    console.log(`5 - Listar clientes com maior consumo`);
    console.log(`6 - Listar clientes por gênero`);
    console.log(`7 - Listar produtos mais consumidos`);
    console.log(`8 - Listar produtos mais consumidos por gênero`);
    console.log(`9 - Excluir um cliente`);
    console.log(`10 - Cadastro de Registro`);
    console.log(`11 - Cadastrar serviço`);
    console.log(`12 - Listar todos os serviços`);
    console.log(`13 - Listar Serviços mais consumidos`);
    console.log(`14 - Listar serviços por genero`);
    console.log(`0 - Sair`);
    let entrada = new entrada_1.default();
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);
    switch (opcao) {
        case 1:
            let cadastro = new cadastroCliente_1.default(empresa.getClientes);
            cadastro.cadastrar();
            break;
        case 2:
            let listagem = new listagemClientes_1.default(empresa.getClientes);
            listagem.listar();
            break;
        case 3:
            let cadastroProduto = new cadastroProduto_1.default(empresa.getProdutos);
            cadastroProduto.cadastrar();
            break;
        case 4:
            let listagemProdutos = new listagemProdutos_1.default(empresa.getProdutos);
            listagemProdutos.listar();
            break;
        case 5:
            let listagemClientesConsumo = new listagemClientesConsumo_1.default(empresa.getClientes);
            listagemClientesConsumo.listarTop10Consumidores();
            break;
        case 6:
            let listagemClientesGenero = new listagemClientesGenero_1.default(empresa.getClientes);
            listagemClientesGenero.listarPorGenero();
            break;
        case 7:
            let listagemProdutosConsumo = new listagemProdutosConsumo_1.default(empresa.getClientes);
            listagemProdutosConsumo.listarMaisConsumidos();
            break;
        case 8:
            let listagemProdutosGenero = new listagemProdutosGenero_1.default(empresa.getClientes);
            listagemProdutosGenero.listarMaisConsumidosPorGenero();
            break;
        case 9:
            let selecionadorCliente = new selecionadorCliente_1.default(empresa.getClientes);
            let cpf = entrada.receberTexto(`Por favor, digite o cpf do cliente para excluir: `);
            let cliente = selecionadorCliente.selecionar(cpf);
            let excluidor = new excluidorCliente_1.default(empresa.getClientes);
            excluidor.excluir(cliente);
            break;
        case 10:
            let registro = new registro_1.default(empresa.getClientes);
            let tipoRegistro = entrada.receberTexto(`Por favor, informe o tipo de registro (produto/servico): `);
            registro.cadastrarRegistro(tipoRegistro);
            break;
        case 11: // Novo case para cadastrar serviço
            let cadastroServico = new cadastroServico_1.default(empresa.getServicos);
            cadastroServico.cadastrar();
            break;
        case 12: // Novo case para listar serviços
            let listagemServicos = new listagemServicos_1.default(empresa.getServicos);
            listagemServicos.listar();
            break;
        case 13: // New case for listing most consumed services
            let listagemServicosConsumo = new listagemServicosConsumo_1.default(empresa.getClientes);
            listagemServicosConsumo.listarMaisConsumidos();
            break;
        case 14: // New case for listing services by gender
            let listagemServicosGenero = new listagemServicosGenero_1.default(empresa.getClientes);
            listagemServicosGenero.listarServicosPorGenero();
            break;
        case 0:
            execucao = false;
            console.log(`Até mais`);
            break;
        default:
            console.log(`Operação não entendida :(`);
    }
}

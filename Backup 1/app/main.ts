import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import ExcluidorCliente from "../negocio/excluidorCliente";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/listagemProdutos";
import SelecionadorCliente from "../negocio/selecionadorCliente";
import ListagemClientesConsumo from "../negocio/listagemClientesConsumo";
import ListagemClientesGenero from "../negocio/listagemClientesGenero";
import ListagemProdutosGenero from "../negocio/listagemProdutosGenero";
import ListagemProdutosConsumo from "../negocio/listagemProdutosConsumo";
import Registro from "../negocio/registro";
import CadastroServico from "../negocio/cadastroServico";
import ListagemServicos from "../negocio/listagemServicos";
import ListagemServicosConsumo from "../negocio/listagemServicosConsumo";
import ListagemServicosGenero from "../negocio/listagemServicosGenero";


console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`);
let empresa = new Empresa();
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

  let entrada = new Entrada();
  let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);

  switch (opcao) {
    case 1:
      let cadastro = new CadastroCliente(empresa.getClientes);
      cadastro.cadastrar();
      break;
    case 2:
      let listagem = new ListagemClientes(empresa.getClientes);
      listagem.listar();
      break;
    case 3:
      let cadastroProduto = new CadastroProduto(empresa.getProdutos);
      cadastroProduto.cadastrar();
      break;
    case 4:
      let listagemProdutos = new ListagemProdutos(empresa.getProdutos);
      listagemProdutos.listar();
      break;
    case 5:
      let listagemClientesConsumo = new ListagemClientesConsumo(empresa.getClientes);
      listagemClientesConsumo.listarTop10Consumidores();
      break;
    case 6:
      let listagemClientesGenero = new ListagemClientesGenero(empresa.getClientes);
      listagemClientesGenero.listarPorGenero();
      break;
    case 7:
      let listagemProdutosConsumo = new ListagemProdutosConsumo(empresa.getClientes);
      listagemProdutosConsumo.listarMaisConsumidos();
      break;
    case 8:
      let listagemProdutosGenero = new ListagemProdutosGenero(empresa.getClientes);
      listagemProdutosGenero.listarMaisConsumidosPorGenero();
      break;
    case 9:
      let selecionadorCliente = new SelecionadorCliente(empresa.getClientes);
      let cpf = entrada.receberTexto(`Por favor, digite o cpf do cliente para excluir: `);
      let cliente = selecionadorCliente.selecionar(cpf);

      let excluidor = new ExcluidorCliente(empresa.getClientes);
      excluidor.excluir(cliente);
      break;
    case 10:
      let registro = new Registro(empresa.getClientes);
      let tipoRegistro = entrada.receberTexto(`Por favor, informe o tipo de registro (produto/servico): `);
      registro.cadastrarRegistro(tipoRegistro);
      break;
    case 11: 
      let cadastroServico = new CadastroServico(empresa.getServicos);
      cadastroServico.cadastrar();
      break;
    case 12: 
      let listagemServicos = new ListagemServicos(empresa.getServicos);
      listagemServicos.listar();
      break;
    case 13: 
    let listagemServicosConsumo = new ListagemServicosConsumo(empresa.getClientes);
    listagemServicosConsumo.listarMaisConsumidos();
    break;
    case 14: 
  let listagemServicosGenero = new ListagemServicosGenero(empresa.getClientes);
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

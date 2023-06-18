import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroSer from "./formularioCadastroSer";
import ListaProduto from "./listaProduto"
import ListaCliente from "./listaCliente";
import ListaSer from "./listaSer";
import Registro from "./registro";
import GeneroCli from "./generoCli";
import TopCli from "./topClientes";
import GeneroPro from "./generoPro";
import TopPro from "./topProdutos";
import TopSer from "./TopSer";
import Editapro from "./editaPro";
import EditaCli from "./editaCli";
import Editaser from "./editaSer";
import GeneroSer from "./generoSer";

type state = {
    tela: string,
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
            
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="purple lighten-4" botoes={['Clientes','Produto','Serviço','Registro']} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="purple lighten-4" seletorView={this.selecionarView} />
                </>
            )
        } else if(this.state.tela=='Cliente Cadastros') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="purple lighten-4"seletorView={this.selecionarView} />
                </>
            )
            } else if(this.state.tela=='Produto') {
                return (
                    <>
                        {barraNavegacao}
                        <ListaProduto tema="purple lighten-4" seletorView={this.selecionarView}/>
                    </>
                )
        }else if(this.state.tela=='Produto Cadastro') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProduto tema="purple lighten-4" seletorView={this.selecionarView} />
                </>
            )
    }else if(this.state.tela=='Registro') {
        return (
            <>
                {barraNavegacao}
                <Registro tema="purple lighten-4" seletorView={this.selecionarView}/>
            </>
        )
}else if (this.state.tela === 'Cligenero') {
    return (
        <>
            {barraNavegacao}
            <GeneroCli tema="purple lighten-4" seletorView={this.selecionarView} />
        </>
    )
}else if (this.state.tela === 'Clitop') {
    return (
        <>
            {barraNavegacao}
            <TopCli tema="purple lighten-4" seletorView={this.selecionarView} />
        </>
    )
}
else if (this.state.tela === 'Generopro') {
    return (
        <>
            {barraNavegacao}
            <GeneroPro tema="purple lighten-4" seletorView={this.selecionarView} />
        </>
    )
}else if (this.state.tela === 'Toppro') {
    return (
        <>
            {barraNavegacao}
            <TopPro tema="purple lighten-4" seletorView={this.selecionarView} />
        </>
    )
}else if (this.state.tela === 'Editapro') {
    return (
        <>
            {barraNavegacao}
            <Editapro tema="purple lighten-4" seletorView={this.selecionarView} />
        </>
    )
}else if (this.state.tela === 'Editacli') {
    return (
        <>
            {barraNavegacao}
            <EditaCli tema="purple lighten-4" seletorView={this.selecionarView} />
        </>
    )
}else if (this.state.tela === 'Serviço') {
    return (
        <>
            {barraNavegacao}
            <ListaSer tema="purple lighten-4" seletorView={this.selecionarView} />
        </>
    )
}else if (this.state.tela === 'GeneroSer') {
    return (
        <>
            {barraNavegacao}
            <GeneroSer tema="purple lighten-4" seletorView={this.selecionarView} />
        </>
    )
}else if (this.state.tela === 'Sertop') {
    return (
        <>
            {barraNavegacao}
            <TopSer tema="purple lighten-4" seletorView={this.selecionarView} />
        </>
    )
}else if (this.state.tela === 'EditaSer') {
    return (
        <>
            {barraNavegacao}
            <Editaser tema="purple lighten-4" seletorView={this.selecionarView} />
        </>
    )
}else if (this.state.tela === 'CadastraSer') {
    return (
        <>
            {barraNavegacao}
            <FormularioCadastroSer tema="purple lighten-4" seletorView={this.selecionarView} />
        </>
    )
}
    }

    }

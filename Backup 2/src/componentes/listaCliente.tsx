/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';

type props = {
    tema: string,
    seletorView:Function;

}

export default class ListaCliente extends Component<props> {
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="collection">
                <a className="collection-item">Cliente 1</a>
                <a className={estilo}>Cliente 2</a>
                <a className="collection-item">Cliente 3</a>
                <a className="collection-item">Cliente 4</a>
                <button className={estiloBotao} onClick={(x) => this.props.seletorView('Cligenero', x)}> Clientes por Genero</button>
                <button className={estiloBotao} onClick={(x) => this.props.seletorView('Clitop', x)}> Top 10 Clientes</button>
                <br></br>
                <br></br>
                <button className={estiloBotao} onClick={(x) => this.props.seletorView('Cliente Cadastros', x)}> Cadastrar </button>
                <br></br>
                <br></br>
                <button className={estiloBotao} onClick={(x) => this.props.seletorView('Editacli', x)}> Editar </button>
            </div>
        )
    }
}
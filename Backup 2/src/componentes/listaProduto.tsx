/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import React from "react";


type props = {
    tema: string,
    seletorView:Function;
}

export default class ListaProduto extends Component<props> {
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="collection">
                <a className="collection-item">Produto 1</a>
                <a className={estilo}>Produto 2</a>
                <a className="collection-item">Produto 3</a>
                <a className="collection-item">Produto 4</a>
                <button className={estiloBotao} onClick={(x) => this.props.seletorView('Generopro', x)}> Produtos por Genero</button>
                <button className={estiloBotao} onClick={(x) => this.props.seletorView('Toppro', x)}>Top produtos</button>
                <br></br>
                <br></br>
                <button className={estiloBotao} onClick={(x) => this.props.seletorView('Produto Cadastro', x)}>Cadastrar</button>
                <br></br>
                <br></br>
                <button className={estiloBotao} onClick={(x) => this.props.seletorView('Editapro', x)}>Editar</button>
                <br></br>
            </div>
        )
    }
}
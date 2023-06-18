/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import React from "react";


type props = {
    tema: string,
    seletorView:Function;
}

export default class ListaSer extends Component<props> {
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="collection">
                <a className="collection-item">Serviço 1</a>
                <a className="collection-item">Serviço 3</a>
                <a className="collection-item">Serviço 4</a>
                <button className={estiloBotao} onClick={(x) => this.props.seletorView('GeneroSer', x)}> Serviços por Genero</button>
                <button className={estiloBotao} onClick={(x) => this.props.seletorView('Sertop', x)}>Top Serviços</button>
                <br></br>
                <br></br>
                <button className={estiloBotao} onClick={(x) => this.props.seletorView('CadastraSer', x)}>Editar</button>
                <br></br>
                <br></br>
                <button className={estiloBotao} onClick={(x) => this.props.seletorView('EditaSer', x)}>Cadastro</button>
            </div>
        )}}
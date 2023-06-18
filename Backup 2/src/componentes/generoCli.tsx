/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string,
    seletorView:Function;
}

export default class GeneroCli extends Component<props> {
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        return (
            <div className="collection">
                <a className="collection-item">Cliente 1</a>
                <a className={estilo}>Genero</a>
                <a className="collection-item">Cliente 3</a>
                <a className={estilo}>Genero</a>
                <a className="collection-item">Cliente 4</a>
                <a className={estilo}>Genero </a>
            </div>
        )
    }
}
import { Component } from "react";

type props = {
    tema: string,
    seletorView:Function;
}

export default class Registro extends Component<props> {
    
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nome" type="text" className="validate" />
                            <label htmlFor="nome">nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="Produto" type="text" className="validate" />
                            <label htmlFor="Produto">Produto</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="servico" type="text" className="validate" />
                            <label htmlFor="servico">serviço</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
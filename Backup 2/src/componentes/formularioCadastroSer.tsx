import React from "react";
import { Component } from "react";

type props = {
    tema: string,
    seletorView:Function;
}

export default class FormularioCadastroSer extends Component<props> {
    
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate" />
                            <label htmlFor="first_name">nome</label>
                            <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                        </div>
                        </div>
                        </div>
                        </form>
                    </div>
        )
    }
}
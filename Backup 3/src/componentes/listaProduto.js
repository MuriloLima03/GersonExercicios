import FormularioCadastroProduto from "./formularioCadastroProduto";

export default function ListaProduto(props) {
    const estilo = `collection-item active ${props.tema}`
    const estiloBotao = `btn waves-effect waves-light ${props.tema}`
    return (
        <div className="collection">
            <a className="collection-item">Produto 1</a>
            <a className="collection-item">Produto 3</a>
            <a className="collection-item">Produto 4</a>
            <button className={estiloBotao} onClick={(e) => props.seletorView('TopPro', e)}>TOP 10</button>
            <button className={estiloBotao} onClick={(e) => props.seletorView('GenPro', e)}>Listagem por Genero</button>
            <br></br>
            <br></br>
            <button className={estiloBotao} onClick={(e) => props.seletorView('ProCrad', e)}>Cadastrar</button>
            <br></br><br></br>
            <button className={estiloBotao} onClick={(e) => props.seletorView('ProEdit', e)}>Editar</button>
        </div>
    )
}

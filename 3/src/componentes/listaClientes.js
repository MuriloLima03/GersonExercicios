/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaClientes(props) {
    const estilo = `collection-item active ${props.tema}`
    const estiloBotao = `btn waves-effect waves-light ${props.tema}`
    return (
        <div className="collection">
            <a className="collection-item">Cliente 1</a>
            <a className="collection-item">Cliente 3</a>
            <a className="collection-item">Cliente 4</a>
            <button className={estiloBotao} onClick={(e) => props.seletorView('TopCli', e)}>TOP 10</button>
            <button className={estiloBotao} onClick={(e) => props.seletorView('GenCli', e)}>Listagem por Genero</button>
            <br></br>
            <br></br>
            <button className={estiloBotao} onClick={(e) => props.seletorView('CadCli', e)}>Cadastrar</button>
            <br></br><br></br>
            <button className={estiloBotao} onClick={(e) => props.seletorView('Edi', e)}>Editar</button>
        </div>
    )
}
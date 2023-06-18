export default function ListaSer(props) {
    const estilo = `collection-item active ${props.tema}`
    const estiloBotao = `btn waves-effect waves-light ${props.tema}`
    return (
        <div className="collection">
            <a className="collection-item">Serviço 1</a>
            <a className="collection-item">Serviço 3</a>
            <a className="collection-item">Serviço 4</a>
            <button className={estiloBotao} onClick={(e) => props.seletorView('TopSer', e)}>TOP 10</button>
            <button className={estiloBotao} onClick={(e) => props.seletorView('GenSer', e)}>Listagem por Genero</button>
            <br></br>
            <br></br>
            <button className={estiloBotao} onClick={(e) => props.seletorView('CadSer', e)}>Cadastrar</button>
            <br></br><br></br>
            <button className={estiloBotao} onClick={(e) => props.seletorView('EdiSer', e)}>Editar</button>
        </div>
    )
}
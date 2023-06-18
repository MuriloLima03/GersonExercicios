export default function GeneroSer(props) {
    const estilo = `collection-item active ${props.tema}`
    return (
        <div className="collection">
            <a className="collection-item">Serviço 1</a>
            <a className={estilo}>Cliente 2</a>
            <a className="collection-item">Serviço 3</a>
            <a className={estilo}>Cliente 2</a>
            <a className="collection-item">Serviço 4</a>
            <a className={estilo}>Cliente 2</a>
        </div>
    )
}
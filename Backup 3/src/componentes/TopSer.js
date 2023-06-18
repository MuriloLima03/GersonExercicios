export default function TopSer(props) {
    const estilo = `collection-item active ${props.tema}`
    return (
        <div className="collection">
            <a className="collection-item">Serviço 1</a>
            <a className="collection-item">Serviço 3</a>
            <a className="collection-item">Serviço 4</a>
        </div>
    )
}
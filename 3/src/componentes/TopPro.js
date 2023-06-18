export default function TopProduto(props) {
    const estilo = `collection-item active ${props.tema}`
    return (
        <div className="collection">
            <a className="collection-item">Produto 1</a>
            <a className="collection-item">Produto 3</a>
            <a className="collection-item">Produto 4</a>
        </div>
    )
}
export default function GeneroClientes(props) {
    const estilo = `collection-item active ${props.tema}`
    return (
        <div className="collection">
            <a className="collection-item">Cliente 1</a>
            <a className={estilo}>Genero 2</a>
            <a className="collection-item">Cliente 3</a>
            <a className={estilo}>Genero 2</a>
            <a className="collection-item">Cliente 4</a>
            <a className={estilo}>Genero 2</a>
        </div>
    )
}
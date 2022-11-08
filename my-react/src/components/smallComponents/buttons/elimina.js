import { Link } from "react-router-dom"

const DeleteButton = (props) => {
    return (
        <Link
            className="linkTag button radius alert"
            to={`/ferramenta/catalogo/eliminazione/${props.prodotto.codice}`}>
            &#9760; Elimina
        </Link>
    )
}

export default DeleteButton;
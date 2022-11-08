import { Link } from "react-router-dom"

const ModifyButton = (props) => {
    return (
        <Link
            className="linkTag button radius warning"
            to={`/ferramenta/catalogo/modifica/${props.prodotto.codice}`}>
            &#9763; Modifica
        </Link>
    )
}

export default ModifyButton;
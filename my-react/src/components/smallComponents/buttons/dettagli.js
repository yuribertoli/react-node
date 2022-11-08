import { Link } from "react-router-dom"

const DetailsButton = (props) => {
    return (
        <Link
            className="linkTag button radius margin-right-1"
            to={`/ferramenta/catalogo/${props.prodotto.codice}`}>
            &#10047; Dettagli
        </Link>
    )
}

export default DetailsButton;
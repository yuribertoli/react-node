import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
import ProductImage from './smallComponents/productImage';

function Eliminazione() {

    const [prodotto, setProdotto] = useState({});
    const { codice } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://127.0.0.1:8080/ferramenta/catalogo/${codice}`)
            .then(response => response.json())
            .then(json => setProdotto(json))
    }, [])

    const handleDelete = () => {

        //chiedo conferma per eliminare la persona
        let conferma = window.confirm(`Sei sicuro di voler eliminare definitivamente il prodotto ${prodotto.nome}?`);

        //se l'utente clicca OK
        if (conferma) {

            try {
                fetch(`http://127.0.0.1:8080/ferramenta/catalogo/${codice}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    }
                })
                .then(risultato => {
                    if (risultato.ok) {
                        navigate(`/`)
                    } else {
                        alert(risultato.status + risultato.statusText);
                    }
                })

                alert(`${prodotto.nome} con codice ${prodotto.codice} rimosso/a correttamente`);

            }
            catch (err) {
                alert(`Errore nella rimozione del prodotto ${prodotto.codice}. ` + err + ".")
            }
            finally {
                navigate('/');
            }
        }
    }

    return (
        <div id='formElimina'>
            <div className="verticalTable">
                <table>
                    <thead>
                        <tr>
                            <th><span>Nome</span></th>
                            <th><span>Prezzo</span></th>
                            <th><span>Codice Prodotto</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span>{prodotto.nome}</span></td>
                            <td><span>{prodotto.prezzo}</span></td>
                            <td><span>{prodotto.codice}</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <button className="button alert radius" onClick={handleDelete}>&#9760; Elimina {prodotto.nome}</button>

            <ul className="no-bullet grid-x margin-top-1">
                <li>
                    <Link
                        className="button radius margin-right-1"
                        to={`/ferramenta/catalogo/${prodotto.codice}`}>
                        &#10047; Dettagli
                    </Link>
                </li>
                <li>
                    <Link
                        className="button radius warning"
                        to={`/ferramenta/catalogo/modifica/${prodotto.codice}`}>
                        &#9763; Modifica
                    </Link>
                </li>
            </ul>

            <ProductImage prodotto={prodotto}/>

        </div>
    )
}

export default Eliminazione;
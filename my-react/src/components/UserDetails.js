import { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";

const UserDetails = () => {

    const [prodotto, setProdotto] = useState({});
    const { codice } = useParams();

    useEffect(() => {
        fetch(`http://127.0.0.1:8080/Ferramenta/Catalogo/${codice}`)
            .then(response => response.json())
            .then(json => setProdotto(json))
    }, [])

    return (
        <>
            <div className="verticalTable">
                <table>
                    <thead>
                        <tr>
                            <th><span>Nome</span></th>
                            <th><span>Prezzo (€)</span></th>
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

            <ul className="no-bullet grid-x">

                <li>
                    <Link 
                        className="button radius warning margin-right-1" 
                        to={`/ferramenta/catalogo/modifica/${prodotto.codice}`}>
                        &#9763; Modifica {prodotto.nome}
                    </Link>
                </li>

                <li>
                    <Link 
                        className="button radius alert" 
                        to={`/ferramenta/catalogo/eliminazione/${prodotto.codice}`}>
                        &#9760; Elimina {prodotto.nome}
                    </Link>
                </li>
                
            </ul>
        </>
    );
};

export default UserDetails;
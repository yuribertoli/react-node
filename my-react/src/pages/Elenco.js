import { Link } from "react-router-dom";
import { useEffect, useState, React } from "react";

function Elenco() {

    const [prodotti, setProdotti] = useState([]);

    useEffect(()=>{
        fetch('http://127.0.0.1:8080/ferramenta/catalogo-min')
        .then(response => response.json())
        .then(json => setProdotti(json))
    }, [])

    return (
        <>
            <div className="container">
                <Link id="createPerson" className="button radius success" to={`/ferramenta/catalogo/creazione/form`}>&#9758; Crea nuovo prodotto</Link>
            </div>

            <table className="container">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Prezzo (€)</th>
                        <th>Codice Prodotto</th>
                        <th>Dettagli</th>
                        <th>Modifica</th>
                        <th>Elimina</th>
                    </tr>
                </thead>

                <tbody>

                    {prodotti.map((prodotto) => (
                        <tr key={prodotto.codice}>

                            <td>{prodotto.nome}</td>
                            <td>{prodotto.prezzo}</td>
                            <td>{prodotto.codice}</td>
                            <td>
                                <Link className="button radius" to={`/ferramenta/catalogo/${prodotto.codice}`}>&#10047;</Link>
                            </td>
                            <td>
                                <Link className="button radius warning" to={`/ferramenta/catalogo/modifica/${prodotto.codice}`}>&#9763;</Link>
                            </td>
                            <td>
                                <Link className="button radius alert" to={`/ferramenta/catalogo/eliminazione/${prodotto.codice}`}>&#9760;</Link>
                            </td>

                        </tr>
                    ))}

                </tbody>

            </table>
        </>
    )   
}

export default Elenco;
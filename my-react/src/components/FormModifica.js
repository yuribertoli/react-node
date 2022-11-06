import { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from "react-router-dom";
import RadioInput from './smallComponents/radioInputs';

const FormModifica = () => {

    const [prodotto, setProdotto] = useState({});
    const navigate = useNavigate();
    const { codice } = useParams();

    const hazardUnicode = '\u2623';

    useEffect(() => {
        fetch(`http://127.0.0.1:8080/ferramenta/catalogo/${codice}`)
            .then(response => response.json())
            .then(json => {setProdotto(json)})
    }, [])

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setProdotto(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = (event) => {

        event.preventDefault();

        try {
            fetch(`http://127.0.0.1:8080/ferramenta/catalogo/${codice}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(prodotto)
            })
            .then(risultato => {
                if (risultato.ok) {
                    navigate(`/ferramenta/catalogo/${prodotto.codice}`)
                } else {
                    alert(risultato.status + risultato.statusText);
                }
            })

            alert(`${prodotto.nome} modificato/a correttamente`);

        }
        catch (err) {
            alert(`Errore nella modifica di ${prodotto.nome}. ` + err + ".")
        }
        finally {
            navigate('/');
        }

    }

    //aspetto che arrivi il dato per renderizzare la pagina
    if (prodotto.disponibile === undefined) {
        return <>In caricamento...</>;
    }

    return (
        <div>
            <form id='formModifica' onSubmit={handleSubmit}>

                <p>Codice prodotto: {prodotto.codice}</p>

                <label>Modifica il nome:
                    <input
                        type="text"
                        name="nome"
                        defaultValue={prodotto.nome}
                        onChange={handleChange}
                    />
                </label>

                <label>Modifica il prezzo:
                    <input
                        type="number"
                        name="prezzo"
                        defaultValue={prodotto.prezzo}
                        onChange={handleChange}
                    />
                </label>

                <label>Modifica l'immagine:
                    <input
                        type="url"
                        name="urlImg"
                        defaultValue={prodotto.urlImg}
                        onChange={handleChange}
                    />
                </label>

                <RadioInput handleChange={handleChange} radioChecked={prodotto.disponibile}/>

                <input className="button radius warning" value={`${hazardUnicode} Modifica ${prodotto.nome}`} type="submit" />

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
                            className="button radius alert"
                            to={`/ferramenta/catalogo/eliminazione/${prodotto.codice}`}>
                            &#9760; Elimina
                        </Link>
                    </li>
                </ul>

                <div className='imgTable'><img src={prodotto.urlImg} alt={prodotto.nome} /></div>

            </form>
        </div>
    )
}

export default FormModifica;
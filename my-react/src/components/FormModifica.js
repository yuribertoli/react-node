import { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from "react-router-dom";
import RadioInput from './smallComponents/radioInputs';
import ProductImage from './smallComponents/productImage';

const FormModifica = () => {

    const [prodotto, setProdotto] = useState({});
    const [quantita, setQuantita] = useState(); //setto dinamicamente una classe

    const navigate = useNavigate();
    const { codice } = useParams();

    const hazardUnicode = '\u2623';

    useEffect(() => {
        fetch(`http://127.0.0.1:8080/ferramenta/catalogo/${codice}`)
            .then(response => response.json())
            .then(json => { 
                setProdotto(json); 
                if(parseInt(json.disponibile) === 0){
                    setQuantita('d-none')
                }
            })
        // eslint-disable-next-line
    }, [])

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setProdotto(values => ({ ...values, [name]: value }));

        createQuantity(event);
    }

    //se il prodotto non è disponibile tolgo la possibilità di aggiungere quantità
    //al contrario se lo rendo disponibile, visualizzo le quantità da impostare
    const createQuantity = (event) => {
        if (event.target.name === 'disponibile') {
            switch (parseInt(event.target.value)) {
                case 0:
                    setQuantita('d-none');
                    break;
                case 1:
                    setQuantita('d-block');
                    break;
                default:
            }
        }
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

                <label id='codiceFormMod'>Codice prodotto non modificabile:&nbsp;
                    <strong>{prodotto.codice}</strong>
                </label>

                <label>Modifica il nome:
                    <input
                        type="text"
                        name="nome"
                        defaultValue={prodotto.nome}
                        onChange={handleChange}
                    />
                </label>

                <label>Modifica il prezzo (€):
                    <input
                        type="number"
                        name="prezzo"
                        min="0.00"  //non puo' essere negativo
                        step="0.05" //aggiunge 5 centesimi per click su freccia aumenta
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

                <RadioInput handleChange={handleChange} 
                            radioChecked={prodotto.disponibile} 
                            prodotto={prodotto}
                            quantita={quantita}
                />

                <input className="linkTag button radius warning" value={`${hazardUnicode} Modifica ${prodotto.nome}`} type="submit" />

                <ul className="no-bullet grid-x margin-top-1">
                    <li>
                        <Link
                            className="linkTag button radius margin-right-1"
                            to={`/ferramenta/catalogo/${prodotto.codice}`}>
                            &#10047; Dettagli
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="linkTag button radius alert"
                            to={`/ferramenta/catalogo/eliminazione/${prodotto.codice}`}>
                            &#9760; Elimina
                        </Link>
                    </li>
                </ul>

                <ProductImage prodotto={prodotto} />

            </form>
        </div>
    )
}

export default FormModifica;
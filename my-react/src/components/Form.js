import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RadioInput from './smallComponents/radioInputs';

const Form = () => {

  const navigate = useNavigate();
  const [prodotto, setProdotto] = useState({});
  const [classe, setClasse] = useState(); //setto dinamicamente una classe

  //richiamo useEffect per avere il valore dell'input predefinito
  useEffect(() => {
    setProdotto(values => ({ ...values, disponibile: 1 }));
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
          setClasse('d-none');
          break;
        case 1:
          setClasse('d-block');
          break;
        default:
      }
    }
  }

  const handleSubmit = (event) => {

    event.preventDefault();

    try {

      fetch('http://127.0.0.1:8080/ferramenta/catalogo', {
        method: 'POST',
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

      alert(`${prodotto.nome} aggiunto/a correttamente`);
    }
    catch (err) {
      alert(`Errore nella creazione del prodotto ${prodotto.nome}. ` + err + ".")
    }
    finally {
      navigate('/');
    }
  }

  return (
    <form onSubmit={handleSubmit}>

      <label>Scrivi il nome prodotto:
        <input
          type="text"
          name="nome"
          value={prodotto.nome || ""}
          onChange={handleChange}
          required
        />
      </label>

      <label>Scrivi il prezzo (€):
        <input
          type="number"
          name="prezzo"
          min="0.00"  //non puo' essere negativo
          step="0.05" //aggiunge 5 centesimi per click su freccia aumenta
          value={prodotto.prezzo || ""}
          onChange={handleChange}
          required
        />
      </label>

      <label>Scrivi il codice prodotto:
        <input
          type="text"
          name="codice"
          value={prodotto.codice || ""}
          onChange={handleChange}
          required
        />
      </label>

      <label>Inserisci l'URL dell'immagine:
        <input
          type="url"
          name="urlImg"
          value={prodotto.urlImg || ""}
          onChange={handleChange}
        />
      </label>

      <RadioInput handleChange={handleChange}
        radioChecked={1}
        prodotto={prodotto}
        classe={classe}
      />

      {/* <select value={"seleziona un opzione"}>
        <option value="A">Apple</option>
        <option value="B">Banana</option>
        <option value="C">Cranberry</option>
      </select> */}

      <input className="button radius success" value={"Crea Prodotto"} type="submit" />

    </form>
  )
};

export default Form;
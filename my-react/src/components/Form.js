import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Form = () => {

  const navigate = useNavigate();

  const [prodotto, setProdotto] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setProdotto(values => ({ ...values, [name]: value }));
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
        />
      </label>

      <label>Scrivi il prezzo (€):
        <input
          type="number"
          name="prezzo"
          value={prodotto.prezzo || ""}
          onChange={handleChange}
        />
      </label>

      <label>Scrivi il codice prodotto:
        <input
          type="text"
          name="codice"
          value={prodotto.codice || ""}
          onChange={handleChange}
        />
      </label>

      <label>Inserisci l'URL dell'immagine:
        <input
          type="text"
          name="urlImg"
          value={prodotto.urlImg || ""}
          onChange={handleChange}
        />
      </label>

      <input className="button radius success" value={"Crea Prodotto"} type="submit" />

    </form>
  )
};

export default Form;
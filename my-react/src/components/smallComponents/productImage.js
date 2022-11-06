function ProductImage({ prodotto }) {

    //se non c'è un immagine caricata mostro quella di default 
    if (prodotto.urlImg !== ""){
        return (
            <div className='imgTable'>
                <img src={prodotto.urlImg} alt={prodotto.nome} />
            </div>
        )
    } else {
        return (
            <div className='imgTable'>
                <img src={require("../../img/logo192.png")} alt={prodotto.nome} />
                <p>Immagine non presente</p>
            </div>
        )
    }
}

export default ProductImage;
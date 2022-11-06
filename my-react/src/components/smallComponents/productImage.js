function ProductImage({ prodotto }) {

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
                <p>Immagine non disponibile</p>
            </div>
        )
    }
}

export default ProductImage;
import '../../style/radioInput.scss';

function RadioInput({handleChange, radioChecked, prodotto, classe}) {

    return (
        <div className='radioInputsQnty'>
            <div>
                <label>Il prodotto è disponibile?:</label>
                <div className='radioGroup'>
                    <div className="custom-radios">
                        <div>
                            <input type="radio" id="color-1" onClick={handleChange} name="disponibile" value={1} defaultChecked={parseInt(radioChecked) === 1? "checked" : ""} />
                            <label htmlFor="color-1">
                                <span>
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                                </span>
                            </label>
                        </div>

                        <div>
                            <input type="radio" id="color-4" onClick={handleChange} name="disponibile" value={0} defaultChecked={parseInt(radioChecked) === 0? "checked" : ""}/>
                            <label htmlFor="color-4">
                                <span>
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                                </span>
                            </label>
                        </div>

                    </div>
                </div>
            </div>
            <div className={`quantityProduct ${classe}`}>
                <label>Quantità disponibili:
                    <input
                    type="number"
                    name="quantita"
                    min="1"  
                    value={prodotto.quantita || ""}
                    required = {classe === 'd-none'? false : true} //rendo richiesto il campo solo se il prodotto viene messo come disponibile
                    onChange={handleChange}
                    />
                </label>
            </div>
        </div>
    )
}

export default RadioInput;


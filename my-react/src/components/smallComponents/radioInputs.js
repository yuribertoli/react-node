import '../../style/radioInput.scss';

function RadioInput(props) {
    return (
        <div>
            <label>Il prodotto è disponibile?:</label>
            <div className='radioGroup'>
                <div className="custom-radios">
                    <div>
                        <input type="radio" id="color-1" name="disponibile" value={1} defaultChecked={true} />
                        <label htmlFor="color-1">
                            <span>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                            </span>
                        </label>
                    </div>

                    <div>
                        <input type="radio" id="color-4" name="disponibile" value={0} />
                        <label htmlFor="color-4">
                            <span>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                            </span>
                        </label>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RadioInput;


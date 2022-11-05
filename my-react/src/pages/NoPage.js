import { Link } from "react-router-dom";
import '../style/404style.scss';

const NoPage = () => {

    return (

        <div className="stage">
            <div className="container">

                <div className="error">
                    <p className="p">4</p>
                    <span className="dracula">
                        <div className="con">
                            <div className="hair"></div>
                            <div className="hair-r"></div>
                            <div className="head"></div>
                            <div className="eye"></div>
                            <div className="eye eye-r"></div>
                            <div className="mouth"></div>
                            <div className="blod"></div>
                            <div className="blod blod2"></div>
                        </div>
                    </span>
                    <p className="p">4</p>

                    <div className="page-ms">

                        <p className="page-msg"> Oops, la pagina che cercavi non esiste! </p>

                        <Link className="button radius margin-right-1" to={`/`}>Torna alla Home Page</Link>

                    </div>
                </div>
            </div>

        </div>
    )
};

export default NoPage;

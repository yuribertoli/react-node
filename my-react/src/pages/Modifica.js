import { Outlet } from "react-router-dom";

function Modifica(){
    return(
        <div className="container">
            <h1>Modifica Prodotto</h1>
            <Outlet/>
        </div>
    )
}

export default Modifica;
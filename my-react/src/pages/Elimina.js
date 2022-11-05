import { Outlet } from "react-router-dom";

function Elimina(){

    return(
        <div className="container">
            <h1>Elimina prodotto</h1>
            <Outlet/>
        </div>
    )   
}

export default Elimina;
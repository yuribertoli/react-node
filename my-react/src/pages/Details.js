import { Outlet } from "react-router-dom";

const Details = () => {
    return (
        <div className="container">
          <h2>Dettaglio prodotto</h2>
          <Outlet />
        </div>
      );
};

export default Details;

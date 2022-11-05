import { Outlet } from "react-router-dom";

const Create = () => {
    return (
        <div className="container">
          <h2>Crea un nuovo prodotto</h2>
          <Outlet />
        </div>
      );
};

export default Create;
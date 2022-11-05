import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Elenco from "./pages/Elenco";
import Details from "./pages/Details";
import ProductDetails from "./components/ProductDetails";
import Create from "./pages/Create";
import Form from "./components/Form";
import Modifica from "./pages/Modifica";
import FormModifica from "./components/FormModifica";
import Elimina from "./pages/Elimina";
import Eliminazione from "./components/Eliminazione";
import NoPage from "./pages/NoPage";
import 'foundation-sites/dist/css/foundation.min.css';
import 'foundation-sites/dist/css/foundation-prototype.min.css';
import './style/style.scss'

export default function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Elenco />} ></Route>

          <Route path='/ferramenta/catalogo' element={<Details />}>
            <Route path=":codice" element={<ProductDetails />} />
          </Route>  

          <Route path='/ferramenta/catalogo/creazione' element={<Create/>}>
            <Route path='form' element={<Form/>}/>
          </Route>

          <Route path='/ferramenta/catalogo/modifica' element={<Modifica/>}>
            <Route path=":codice" element={<FormModifica />} />
          </Route>

          <Route path='/ferramenta/catalogo/eliminazione' element={<Elimina/>}>
            <Route path=":codice" element={<Eliminazione />} />
          </Route>      

        </Route>

        <Route path="*" element={<NoPage />} />

      </Routes>

    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


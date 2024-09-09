import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pagina from "./componentes/layouts/Pagina";
import Tela404 from "./componentes/Telas/Tela404";
import TelaCadProduto from "./componentes/Telas/TelaCadProduto";
import TelaMenu from "./componentes/Telas/TelaMenu";
import TelaCadCategoria from "./componentes/Telas/TelaCadCategoria";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {
        //a ordem das rotas é importante
      }
        <Routes>  
          <Route path="/produto" element={<TelaCadProduto/>}/>
          <Route path="/categoria" element={<TelaCadCategoria/>}/>
          <Route path="/" element={<TelaMenu/>}/>
          <Route path="*" element={<Tela404/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

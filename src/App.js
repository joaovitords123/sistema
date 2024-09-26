import TelaCadCli from "./componentes/Telas/TelaCadCli";
import TelaCadCat from "./componentes/Telas/TelaCadCat";
import TelaCadProd from "./componentes/Telas/TelaCadProd";
import TelaCadastroFornecedor from "./componentes/Telas/TelaCadastroFornecedor";
import TelaCadastroUsuario from "./componentes/Telas/TelaCadastroUsuario";
import TelaMenu from "./componentes/Telas/TelaMenu";
import Tela404 from "./componentes/Telas/Tela404";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<div>
			<BrowserRouter>
				{
					//A ordem das rotas é importante
				}
				<Routes>
					<Route path="/" element={<TelaMenu />} />
					<Route path="/cliente" element={<TelaCadCli />} />
					<Route path="/fornecedor" element={<TelaCadastroFornecedor />} />
					<Route path="/usuario" element={<TelaCadastroUsuario />} />
					<Route path="/produto" element={<TelaCadProd />} />
					<Route path="/categoria" element={<TelaCadCat />} />
					<Route path="*" element={<Tela404 />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

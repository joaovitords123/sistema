import Menu from "./Menu";
import Cabecalho from "./Cabecalho";

export default function Pagina(props){
    return(
        <>
            <Cabecalho titulo="Sistema de controle gerencial"/>
            <Menu/>
            {
                props.children
            }
        </>
    );
}
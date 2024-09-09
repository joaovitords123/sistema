import Pagina from "../layouts/Pagina";
import imagem404 from '../../assets/imagens/Page_not_Found.png'
import { Container } from "react-bootstrap";

export default function Tela404(props){
    return (
        <Pagina>
            <Container>
                <img src={imagem404} />
                <h1 className="text-center">O recurso solicitado não existe</h1>
            </Container>
        </Pagina>
    );
}
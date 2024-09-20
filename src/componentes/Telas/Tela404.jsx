import img from "../../assets/imagens/Page_not_Found.png";
import { Container } from 'react-bootstrap'
export default function PaginaError(props) {
    return (
        <Container className='text-center'>
            <img src={img} alt="Erro" />
            <h1>
                O recurso solicitado não existe
            </h1>
        </Container>
    );
}
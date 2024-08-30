import { Alert } from "react-bootstrap";
export default function Cabecalho(porps){
    //método render
    return (
        <Alert className={"text-center"} variant="light">{porps.titulo || "Título não fornecido"}</Alert>
    );
}
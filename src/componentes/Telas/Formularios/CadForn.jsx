import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function CadForn(props) {
    return (
        <>
            <Form noValidate>

                <Row className="mb-4">
                    <Form.Group as={Col} md="12" controlId="validationFormik01">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control
                            type="text"
                            name="nome"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-4">
                    <Form.Group as={Col} md="3" controlId="validationFormik04">
                        <Form.Label>Cnpj:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Cnpj"
                            name="cnpj"
                        />
                        <Form.Control.Feedback type="invalid">
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="3" controlId="validationFormik04">
                        <Form.Label>Bairro:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Bairro"
                            name="bairro"
                        />
                        <Form.Control.Feedback type="invalid">
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="3" controlId="validationFormik04">
                        <Form.Label>Cidade:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Cidade"
                            name="cidade"
                        />
                        <Form.Control.Feedback type="invalid">
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-4">
                    <Form.Group as={Col} md="6" controlId="validationFormik04">
                        <Form.Label>Rua:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Rua"
                            name="rua"
                        />
                        <Form.Control.Feedback type="invalid">
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="3" controlId="validationFormik04">
                        <Form.Label>Número Endereço:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Número"
                            name="num"
                        />
                        <Form.Control.Feedback type="invalid">
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="3" controlId="validationFormik04">
                        <Form.Label>Cep:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Cep"
                            name="cep"
                        />
                        <Form.Control.Feedback type="invalid">
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-4" >
                    <Form.Group as={Col} md="6" controlId="validationFormik04">
                        <Form.Label>Telefone:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Telefone"
                            name="tel"
                        />
                        <Form.Control.Feedback type="invalid">
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationFormikUsername">
                        <Form.Label>E-mail</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="E-mail"
                                aria-describedby="inputGroupPrepend"
                                name="email"
                            />
                            <Form.Control.Feedback type="invalid">
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>

                <Row className='mt-2 mb-2'>
                    <Col md={1}>
                        <Button type='submit'>Confirmar</Button>
                    </Col>
                    <Col md={{offset:1}}> 
                        <Button onClick={() => {
                            props.setExibirTabela(true)
                        }}>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
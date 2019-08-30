import React from 'react'
import { Button } from 'react-bootstrap'
import { useGlobalState } from '../state/statecontext'
import { Container, Row, Col, Card, Form} from 'react-bootstrap'

export function Login(){
    const [{user}, dispatch] = useGlobalState()
    return(
        <Container>
            <br/>
            <br/>
            <Row>
                <Col 
                className="justify-content-center"
                sm={{span: 4, offset: 4}}>
                    <Card>
                        <Card.Body>
                            <Form.Group>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="password" placeholder="Password" />
                                <br/>
                                <Button block variant="primary" onClick={() => dispatch({type: "addUser"})}> Login </Button>
                                <Form.Text> No Email/Password Required</Form.Text>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
        </Container>
    )
}
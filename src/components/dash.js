import React from 'react'
import { ListCodes } from './codeDefinition/list'
import { Row, Col, Jumbotron } from 'react-bootstrap'
export function Dash(){
    const center = {
        textAlign: 'center'
    }
    return(
        <div>
            <Row>
                <Col>
                    <Jumbotron
                    style={center}>
                        <h1> Tracking Codes </h1>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListCodes/>
                </Col>
            </Row>
        </div>
    )
}
import React from 'react'
import {Card, Row, Col, Form} from 'react-bootstrap'
import { useGlobalState } from '../../state/statecontext'

export function AddTracking(){
    const uniqid = require('uniqid');
    const [{isAddTrackingOpen}, dispatch] = useGlobalState()
    const [{codes}] = useGlobalState()
    const center = {
        textAlign: 'center'
    }
    const noRadius = {
        'borderRadius': 0
    }
    return(
        <Card style={noRadius}>
            {isAddTrackingOpen === false &&
                <Card.Header>
                    <Row>
                        <Col
                        style={center}
                        md={{span:1, offset:11}}>
                            <i onClick={() => dispatch({type: "OpenAddTrackingCode", switch: "On"})} className="material-icons addButton">add_circle_outline</i>
                        </Col>
                    </Row>
                </Card.Header>
            }
            {isAddTrackingOpen &&
            <div>
                <Card.Header>
                    <Row>
                        <Col 
                        style={center}
                        md={{span:1, offset:11}}>
                            <i className="material-icons closeButton" onClick={() => dispatch({type: "OpenAddTrackingCode", switch: "Off"})}>clear</i>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={2}>
                            Code
                        </Col>
                        <Col md={2}>
                            Type
                        </Col>
                        <Col md={4}>
                            Project
                        </Col>
                        <Col>
                            Description
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                            <Form.Control
                            id="cid"
                            plaintext 
                            readOnly 
                            defaultValue={uniqid()}/>
                        </Col>
                        <Col md={2}>
                            <Form.Control 
                            id="type"
                            as="select">
                                {codes.map(code =>
                                    <option key={code.id}>
                                        {code.type}
                                    </option>
                                )}
                            </Form.Control>
                        </Col>
                        <Col md={4}>
                            <Form.Control 
                            id="project"
                            as="select">
                                {codes.map(code =>
                                    <option key={code.id}>
                                        {code.project}
                                    </option>
                                )}
                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Control id="description"/>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col md={{span: 1, offset:11 }}>
                            <i 
                            className="material-icons doneButton" 
                            onClick={
                                () => dispatch({
                                    type: 'AddTrackingCode',
                                    id: document.getElementById('cid').value, 
                                    project: document.getElementById('project').value, 
                                    codetype: document.getElementById('type').value, 
                                    description: document.getElementById('description').value
                                })
                            }>done</i>
                        </Col>
                    </Row>
                </Card.Body>
            </div>
            }
        </Card>
    )
}
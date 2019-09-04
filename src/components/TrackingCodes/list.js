import React from 'react'
import { useGlobalState } from '../../state/statecontext'
import { Table, Jumbotron } from 'react-bootstrap'
import { AddTracking } from './add'

export function ListCodes(){
    const [{codes}] = useGlobalState()
    const center = {
        textAlign: 'center',
        'marginBottom': 0
    }
    return(
        <div>
            <Jumbotron
                style={center}
                fluid>
                    <h1> Tracking Codes </h1>
            </Jumbotron>
            <AddTracking/>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Project</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                {codes.map(code => 
                    <tr key={code.id}>
                        <td>{code.id}</td>
                        <td>{code.project}</td>
                        <td>{code.type}</td>
                        <td>{code.description}</td>
                    </tr>)}
                </tbody>
            </Table>
        </div>
    )
}
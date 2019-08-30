import React from 'react'
import { useGlobalState } from '../../state/statecontext'
import { Table } from 'react-bootstrap'

export function ListCodes(){
    const [{codes}, dispatch] = useGlobalState()
    return(
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
                <tr>
                    <td>{code.id}</td>
                    <td>{code.project}</td>
                    <td>{code.type}</td>
                    <td>{code.description}</td>
                </tr>)}
            </tbody>
        </Table>
    )
}
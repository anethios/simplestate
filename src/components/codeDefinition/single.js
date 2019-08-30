import React from 'react'

export function TrackingCode({project, type, description}) {
    return (
        <ol>
            <ul>
                project: {project}
            </ul>
            <ul>
                type: {type}
            </ul>
            <ul>
                description: {description}
            </ul>
        </ol>
    )
}
import React from 'react'

export const Child = ({phone, address, age}) => {
    return (
        <div>
            <span>{phone}</span>
            <span>{address}</span>
            <span>{age}</span>
        </div>
    )
}

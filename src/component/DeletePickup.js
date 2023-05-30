import React from 'react';
import { useLocation } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client'


const DELETE_PICKUP = gql`
    mutation deletePickup($id: Int!){
        deletePickup(id: $id) {
            id
        }
    }
`


export default function DeletePickup() {
    const location = useLocation();
    const [DeletePickup] = useMutation(DELETE_PICKUP);


    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                DeletePickup({
                    variables:
                    {
                        id: location.state.id
                    },
                    onCompleted: () => {
                        window.location.href = '/listpickups'
                    }
                })
            }}
        >
            <div>are you sure you want delete {location.state.id}</div>
            <input type='submit' />
        </form>
    )
}

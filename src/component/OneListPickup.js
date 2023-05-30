import React from 'react'
import { useOneList } from '../hooks/useOneList';
import { useParams, Link } from 'react-router-dom';




export default function OneListPickup() {
    const { id } = useParams();
    const { error, data, loading } = useOneList(parseInt(id));
    
    if (loading) return (<div>Loading...</div>)
    if (error) return (<div>Someting went Error...</div>)

    return (
        <div >
            <h1> {data.pickup.id} </h1>
            <h1> {data.pickup.code} </h1>
            <h1> {data.pickup.date} </h1>
            <h1> {data.pickup.timeFrom} </h1>
            <h1> {data.pickup.timeTo} </h1>
            <h1> {data.pickup.shipmentsCount} </h1>
            <h1> {data.pickup.notes} </h1>
            <Link
                to={`/editpickup/${data.pickup.id}`}
                state={{
                    id : data.pickup.id,
                    code : data.pickup.code,
                    date : data.pickup.date,
                    timeFrom : data.pickup.timeFrom,
                    timeTo : data.pickup.timeTo,
                    shipmentsCount : data.pickup.shipmentsCount,
                    notes : data.pickup.notes,
                }}>Edit</Link>
            <Link
                to={`/deletepickup/${data.pickup.id}`}
                state={{
                    id : data.pickup.id
                }}
            >Delete</Link>
        </div>
    )
}

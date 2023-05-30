import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client';
import './CreatePickup.css';


const CREATE_NEW_PICKUP = gql`
    mutation createPickupNew(
        $date: Date!,
        $timeFrom: Time!,
        $timeTo: Time!,
        $shipmentsCount: Int!,
        $notes: String!){
            createPickup: savePickup(
            input: {
            date: $date
            timeFrom: $timeFrom
            timeTo: $timeTo
            shipmentsCount: $shipmentsCount
            notes: $notes
            }
        ) {
            id
            code
            date
            timeFrom
            timeTo
            shipmentsCount
            notes
        }}
`

export default function CreatePickup() {
    const [date, setDate] = useState('');
    const [timeFrom, setTimeFrom] = useState('');
    const [timeTo, setTimeTo] = useState('');
    const [shipmentsCount, setShipmentsCount] = useState('');
    const [notes, setNotes] = useState('');

    const [createPickupNew] = useMutation(CREATE_NEW_PICKUP);

    return (
        <form className='formCreate'
            onSubmit={(e) => {
                e.preventDefault();
                createPickupNew({
                    variables:
                    {
                        date: date,
                        timeFrom: timeFrom,
                        timeTo: timeTo,
                        shipmentsCount: parseInt(shipmentsCount),
                        notes: notes
                    },
                    onCompleted: (data) => {
                        window.location.href='/listpickups'
                    }
                })
            }}
        >
            <div>
                <label>date</label>
                <input type='date' value={date} onChange={(e) => (setDate(e.target.value))} />
            </div>
            <div>
                <label>timeFrom</label>
                <input type='time' value={timeFrom} onChange={(e) => (setTimeFrom(e.target.value))} />
            </div>
            <div>
                <label>timeTo</label>
                <input type='time' value={timeTo} onChange={(e) => (setTimeTo(e.target.value))} />
            </div>
            <div>
                <label>shipmentsCount</label>
                <input type='number' value={shipmentsCount} onChange={(e) => (setShipmentsCount(e.target.value))} />
            </div>
            <div>
                <label>notes</label>
                <input type='text' value={notes} onChange={(e) => (setNotes(e.target.value))} />
            </div>
            <input type='submit' />
        </form>
    )
}

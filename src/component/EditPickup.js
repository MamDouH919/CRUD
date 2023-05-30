// import React, { useState } from 'react'
// import { useLocation } from 'react-router-dom'

// import { gql, useMutation } from '@apollo/client';

// const UPDATE_PICKUP = gql`
//     mutation updatePickup(
//         $id: Int!,
//         $code: String!,
//         $date: Date,
//         $timeFrom: Time,
//         $timeTo: Time,
//         $shipmentsCount: Int,
//         $notes: String){
//             createPickup: savePickup(
//             input: {
//             id: $id
//             code: $code
//             date: $date
//             timeFrom: $timeFrom
//             timeTo: $timeTo
//             shipmentsCount: $shipmentsCount
//             notes: $notes
//             }
//         ) {
//             id
//             code
//             date
//             timeFrom
//             timeTo
//             shipmentsCount
//             notes
//         }}
// `

// export default function EditPickup() {
//   const location = useLocation();
//   console.log(location);
//   const [date, setDate] = useState(location.state.date );
//   const [timeFrom, setTimeFrom] = useState(location.state.timeFrom && location.state.timeFrom);
//   const [timeTo, setTimeTo] = useState(location.state.timeTo);
//   const [shipmentsCount, setShipmentsCount] = useState(location.state.shipmentsCount);
//   const [notes, setNotes] = useState(location.state.notes);

//   const [UpdatePickup] = useMutation(UPDATE_PICKUP);

//   return (
//     <form className='form-del'
//       onSubmit={(e) => {
//         e.preventDefault();
//         UpdatePickup({
//           variables:
//           {
//             id: parseInt(location.state.id),
//             code: location.state.code,
//             date: date,
//             timeFrom: timeFrom,
//             timeTo: timeTo,
//             shipmentsCount: parseInt(shipmentsCount),
//             notes: notes
//           },
//           onCompleted: () => {
//             window.location.href = '/listpickups/' + location.state.id;
//           }
//         })
//       }}
//     >
//       <input type='hidden' value={location.state.id} />
//       <input type='hidden' value={location.state.code} />
//       <div>
//         <label>date</label>
//         <input type='date' value={date} onChange={(e) => (setDate(e.target.value))} />
//       </div>
//       <div>
//         <label>timeFrom</label>
//         <input type='time' value={timeFrom} onChange={(e) => (setTimeFrom(e.target.value))} />
//       </div>
//       <div>
//         <label>timeTo</label>
//         <input type='time' value={timeTo} onChange={(e) => (setTimeTo(e.target.value))} />
//       </div>
//       <div>
//         <label>shipmentsCount</label>
//         <input type='number' value={shipmentsCount} onChange={(e) => (setShipmentsCount(e.target.value))} />
//       </div>
//       <div>
//         <label>notes</label>
//         <input type='text' value={notes} onChange={(e) => (setNotes(e.target.value))} />
//       </div>
//       <input type='submit' />
//     </form>
//   )
// }

import * as React from "react";
import { useForm, useController } from "react-hook-form";
import "./useController.css";
import DatePicker from './inputs/DatePicker';
import TimePicker from './inputs/TimePicker';
import { useLocation } from 'react-router-dom'
import Input from "./inputs/Inputs";
import * as gqlb from "gql-query-builder";
import { gql, useMutation } from '@apollo/client';
import moment from "moment";



const body = gqlb.mutation({
  operation: "savePickup",
  fields: 
    ["id", "code", "date", "timeFrom", "timeTo", "shipmentsCount", "notes"]
  ,
  variables: {
    input: {
      type: 'PickupInput!'
    }
  }
})

const UPDATE_PICKUP = gql`${body.query}`

export default function App() {
  const location = useLocation();
  const [UpdatePickup] = useMutation(UPDATE_PICKUP);
  console.log(UpdatePickup);
  const toTimestamp = (strDate) => {
    const dt = new Date("2022-03-03 " + strDate);
    return dt
  }
  const timeFrom = toTimestamp(location.state.timeFrom)
  const timeTo = toTimestamp(location.state.timeTo)

  const { handleSubmit, control } = useForm({
    defaultValues: {
      date: location.state.date,
      timefrom: timeFrom,
      timeto: timeTo,
      shipmentsCount: location.state.shipmentsCount,
      notes: location.state.notes
    },
    mode: "onChange"
  });
  const onSubmit = (data) => {
    const date = data.date.toString();
    const timeFrom = new Date(data.timefrom);
    const timeTo = new Date(data.timefrom);
    const formatedDate = moment(date).format('YYYY-MM-DD');
    const formatedtimeFrom = moment(timeFrom).format('hh:mm');
    const formatedtimeTo = moment(timeTo).format('hh:mm');
    const shipmentsCount = data.shipmentsCount;
    const notes = data.notes;
    UpdatePickup({
      variables:
      {
        input: {
          id: parseInt(location.state.id),
          code: location.state.code,
          date: formatedDate,
          timeFrom: formatedtimeFrom,
          timeTo: formatedtimeTo,
          shipmentsCount: parseInt(shipmentsCount),
          notes: notes
        }
      },
      onCompleted: () => {
        window.location.href = '/listpickups/' + location.state.id;
      }
    })
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1>Edit Pickup</h1>
        <DatePicker name='date' control={control} labelName="Date" rules={{ required: 'this is required' }} />
        <TimePicker name='timefrom' control={control} labelName="Time From" rules={{ required: 'this is required' }} />
        <TimePicker name='timeto' control={control} labelName="Time To" rules={{ required: 'this is required' }} />
        <Input control={control} labelName="Shipments Count" type='number' name='shipmentsCount'
          rules={{ required: 'this is required' }} style={{ margin: '10px' }} />
        <Input control={control} labelName="Notes" type='text' name='notes'
          rules={{ required: 'this is required' }} style={{ margin: '10px' }} />
      </div>
      <input type='submit' />
    </form>
  );
}


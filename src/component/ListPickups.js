// import React from 'react'
import { useLists } from '../hooks/useListPickups';
// import { Link } from 'react-router-dom';


// export default function ListPickups() {
//     const { error, loading, data } = useLists();

//     if (loading) return (<div>Loading...</div>)
//     if (error) return (<div>Someting went Error...</div>)
//     return (
//         <div className='list'>
//             <Link to={`/createnewpickup`}> Create New</Link>
//             {data.listPickups.data.map((list) => {
//                 return <Link key={list.id} to={`/listpickups/${list.id}`}>
//                     <div>{list.code}</div>
//                     <div>{list.date}</div>
//                     <div>{list.timeFrom}</div>
//                     <div>{list.timeTo}</div>
//                     <div>{list.shipmentsCount}</div>
//                     <div>{list.notes}</div>
//                     <hr></hr>
//                 </Link>
//             })}
//         </div>
//     )
// }

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function BasicTable() {
    const { error, loading, data } = useLists();

    return loading ? <CircularProgress /> : (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Code</TableCell>
                        <TableCell align="left">Date</TableCell>
                        <TableCell align="left">Time From</TableCell>
                        <TableCell align="left">Time To</TableCell>
                        <TableCell align="left">Shipments Count</TableCell>
                        <TableCell align="left">Notes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.listPickups.data.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <Link to={`/listpickups/${row.id}`}>
                                    {row.code}
                                </Link>
                            </TableCell>
                            <TableCell align="left">{row.date}</TableCell>
                            <TableCell align="left">{row.timeFrom}</TableCell>
                            <TableCell align="left">{row.timeTo}</TableCell>
                            <TableCell align="left">{row.shipmentsCount}</TableCell>
                            <TableCell align="left">{row.notes}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

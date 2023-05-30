import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useController } from "react-hook-form";
import { TimePicker } from '@mui/x-date-pickers';


export default function BasicDatePicker(props) {

    const {
        labelName,
        name,
        control,
        rules,
    } = props;


    const { field, formState: { errors } } = useController({
        name,
        control,
        rules,
    }); // control to inputs

    const {
        onChange,
        ref,
        ...restField
    } = field;

    const fieldError = errors[name]?.message;
    //console.log(fieldError);
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
                {...restField}
                inputRef={ref}
                label={labelName}
                onChange={(e) => {
                    onChange(e)
                }}
                renderInput={(params) => <TextField {...params} error={Boolean(fieldError)} helperText={fieldError} />}
            />
        </LocalizationProvider>
    );
}
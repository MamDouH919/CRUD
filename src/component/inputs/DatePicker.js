import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useController } from "react-hook-form";


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
        defaultValue: "",
    }); // control to inputs

    const {
        onChange,
        ref,
        ...restField
    } = field;
    const fieldError = errors[name]?.message;

    // const [value, setValue] = React.useState(null);
    // const onDatePicked = (event) => {
    //     setValue(event);
    //     let onlyDate = event.$d;
    //     props.onChange(onlyDate);
    //     console.log("Date Changed", event, onlyDate);
    // };

    // React.useEffect(() => {
    //     if (props.initialValue !== 0 && value === null) {
    //         setValue(props.initialValue);
    //         console.log("Initial Date is", props.initialValue);
    //     }
    // }, [props.initialValue, value, setValue]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
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
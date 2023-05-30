import * as React from "react";
import { useController } from "react-hook-form";
import TextField from '@mui/material/TextField';

export default function Input(props) {
    const {
        labelName,
        name,
        control,
        rules,
        type
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

    return (
        <div style={{ margin: '10px' }}>
            <TextField
                {...restField}
                inputRef={ref}
                error={Boolean(fieldError)}
                label={labelName}
                id="outlined-error"
                placeholder={labelName}
                helperText={fieldError}
                onChange={(e) => {
                    onChange(e)
                }}
            // type={type}
            />
        </div>
    );
}
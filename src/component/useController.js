import * as React from "react";
import { useForm, useController } from "react-hook-form";
import TextField from '@mui/material/TextField';
import "./useController.css";

function Input(props) {
    const {
        labelName,
        name,
        onChange: onChangeValue,
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
    
    console.log(errors[name]);
    const fieldError = errors[name]?.message;
    
    return (
        <div>
            {/* <input {...restField} onChange={(e) => {
                onChange(e)
                onChangeValue && onChangeValue(e)
            }} placeholder={name} type={type} /> */}
            <TextField
                {...restField}
                inputRef={ref}
                onChange={(e) => {
                    onChange(e)
                    onChangeValue && onChangeValue(e)
                }}
                error={Boolean(fieldError)}
                label={labelName}
                id="outlined-error"
                placeholder={labelName}
                helperText={fieldError}
            />
        </div>
    );
}

export default function App() {
    const { handleSubmit, control } = useForm({
        defaultValues: {
            FirstName: ""
        },
        mode: "onChange"
    });
    const onSubmit = (data) => console.log(data);
    return (
        <div>
            <h1>useController</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input control={control} labelName="First Name" type='number' name='FirstName'
                    rules={{ required: 'this is required' }} onChange={(e) => console.log(e.target.value)} />
                <input type="submit" />
            </form>
        </div>
    );
}

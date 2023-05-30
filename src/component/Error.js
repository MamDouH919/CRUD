import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useForm, useController } from "react-hook-form";


function TextInput(props) {
    const { label, errors, control, rules } = props;

    const { field, fieldState } = useController({
        label,
        control,
        rules,
    });
    // const {
    //     name,
    //     ...restField
    // } = field;
    // const {error} = fieldState;
    return (
        <div>
            <TextField
                // {...restField}
                id="outlined-error"
                label={label}
                defaultValue="Hello World"
            />
            {/* <p>{fieldState.error && "error"}</p> */}
        </div>
    )
}


export default function ValidationTextFields() {
    const { handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            FirstName: ""
        },
        mode: "onChange"
    });
    const onSubmit = (data) => console.log(data);

    return (
        <form style={{ marginTop: '100px' }} onSubmit={handleSubmit(onSubmit)}>
            <TextInput label='First Name' control={control} errors={errors} rules={{ required: true }} />
            <input value='Ok' type='submit' />
        </form>
    );
}

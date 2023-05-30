import React from "react";
import { useForm } from "react-hook-form";

import "./IntegrationForm.css";

// The following component is an example of your existing Input Component
const Input = ({ label, register, required, type, pattern }) => (
    <>
        <label>{label}</label>
        <input {...register(label, { required, pattern: pattern })} type={type} />
    </>
);

// you can use React.forwardRef to pass the ref too
const Select = React.forwardRef(({ onChange, name, label }, ref) => (
    <>
        <label>{label}</label>
        <select name={name} ref={ref} onChange={onChange}>
            <option value="20">20</option>
            <option value="30">30</option>
        </select>
    </>
));

const App = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input label="First Name" register={register} pattern={/^[A-Za-z]+$/i} required />
            <Input label="Last Name" register={register} pattern={/^[A-Za-z]+$/i} required />
            <Input label="Email" register={register} required type='email' />
            <Input label="age" register={register} required type='number' />
            <Select label="Age" {...register("Age")} />
            <input type="submit" />
        </form>
    );
};

export default App;

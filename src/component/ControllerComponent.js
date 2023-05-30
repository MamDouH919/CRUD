import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Checkbox, Input } from "@mui/material";
import { Input as AntdInput } from "antd";

import "./ControllerComponent.css";

const App = () => {
    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>First Name</label>
            <Controller
                render={({ field }) => <Input {...field} />}
                name="firstName"
                control={control}
                defaultValue=""
                className="materialUIInput"
            />
            <label>Last Name</label>
            <Controller
                render={({ field }) => <AntdInput {...field} />}
                name="lastName"
                control={control}
                defaultValue=""
            />
            <label>Ice Cream Preference</label>
            <Controller
                name="iceCreamType"
                render={({ field }) => (
                    <Select
                        {...field}
                        options={[
                            { value: "chocolate", label: "Chocolate" },
                            { value: "strawberry", label: "Strawberry" },
                            { value: "vanilla", label: "Vanilla" }
                        ]}
                    />
                )}
                control={control}
                defaultValue=""
            />
            <Controller
                name="Checkbox"
                control={control}
                render={({ field }) => <Checkbox {...field} />}
            />

            <input type="submit" />
        </form>
    );
};

export default App;

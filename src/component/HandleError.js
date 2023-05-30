import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";

import "./HandleErrors.css";

export default function App() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    criteriaMode: "all"
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>ErrorMessage</h1>
      <input
        {...register("multipleErrorInput", {
          required: "This input is required.",
          pattern: {
            value: /\d+/,
            message: "This input is number only."
          },
          minLength: {
            value: 11,
            message: "This input must exceed 10 characters"
          }
        })}
      />
      <ErrorMessage
        errors={errors}
        name="multipleErrorInput"
        render={({ messages }) => {
          console.log("messages", messages);
          return messages
            && Object.entries(messages).map(([type, message]) => (
                <p key={type}>{message}</p>
              ))
            
        }}
      />

      <input type="submit" />
    </form>
  );
}


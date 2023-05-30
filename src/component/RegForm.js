import { useForm } from "react-hook-form";


export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName", { required: true, maxLength: 20 })} />
            {errors.firstName && <span>This field is required</span>}
            <input {...register("lastName", { required: true ,pattern: /^[A-Za-z]+$/i })} />
            {errors.lastName && <span>This field is required</span>}
            <input type="number" {...register("age", { min: 18, max: 99 })} />
            <input type="submit" />
        </form>
    );
}
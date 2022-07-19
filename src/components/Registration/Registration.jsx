
import React from "react";
import { useForm } from "react-hook-form";
import './registration.css';
function Registration() {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);
    return ( <>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <p>{errors.firstName?.message}</p>
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input {...register("mail", { required: "Email Address is required" })} />
      <p>{errors.mail?.message}</p>
      <input type="submit" />
    </form></>);
}

export default Registration;
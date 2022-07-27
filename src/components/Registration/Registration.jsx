
import React from "react";
import { useForm } from "react-hook-form";
// import { ErrorMessage } from '@hookform/error-message';
import { Link } from "react-router-dom";
import {
  Container,
  Form,
  Button
} from "react-bootstrap";
import './registration.css';
import { useDispatch } from "react-redux";
import { getAPI } from "../../Redux/userSlice";


function Registration() {

  const {
    register, handleSubmit, watch, formState: { errors }} = useForm();
    const dispatch = useDispatch();
  const onSubmit = (data) => dispatch(getAPI(data))
  
  const onError = (error) => {
    console.log("ERROR:::", error);
  };
  return ( 
    <Container className="my-4">
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control name="multipleErrorInput"
            type="email"
            placeholder="Your email"
            {...register("email", { required: "this field is requierd" , pattern:{
              value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message:"wrong inputs"
            } 
          
          })}
      
          />
          {errors.email && (
            <Form.Text className="text-danger">
              {errors.email.message}
            </Form.Text>
          )}



      {/* <ErrorMessage
        errors={errors}
        name="multipleErrorInput"
        render={({ messages }) => {
          console.log("messages", messages);
          return messages
            ? Object.entries(messages).map(([type, message]) => (
              <Form.Text key={type} className="text-danger">
              {message}
            </Form.Text>

              ))
            : null;
        }}
      /> */}
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="multipleErrorInput"
            type="password"
            placeholder="Your password"
            {...register("password", { required: "this field is requierd" , minLength: {
              value: 8,
              message: "Password must have at least 8 characters"
            }
          
          })}
      
          />
          {errors.password && (
            <Form.Text className="text-danger">
              {errors.password.message}
            </Form.Text>
          )}



        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Button as={Link} to="/login">login</Button>
    </Container>);
    // return ( <>
    //   <form onSubmit={handleSubmit(onSubmit)}>
    //   <input {...register("firstName", { required: true, maxLength: 20 })} />
    //   <p>{errors.firstName?.message}</p>
    //   <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
    //   <input {...register("mail", { required: "Email Address is required" })} />
    //   <p>{errors.mail?.message}</p>
    //   <input type="submit" />
    // </form></>);
}

export default Registration;
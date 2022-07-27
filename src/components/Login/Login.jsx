import {
    Container,
    Form,
    Button,
    Row,
    Col
    // InputGroup,
    // FormControl
  } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
function Login() {
    const {
        register, handleSubmit, watch, formState: { errors }} = useForm();
    
      const onSubmit = (data) => console.log(data);
      
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
    

            </Form.Group>



            
            <Button variant="primary" type="submit">
              login
            </Button>
          </Form>
          <Button as={Link} to="/login">login</Button>
        </Container>);
}

export default Login;
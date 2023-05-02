/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Register = () => {
    const { registerUser } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleRegistration = (event) => {
        event.preventDefault();
      
        if (name && email && password && photoUrl) {
          if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
            setError("Password must be at least 6 characters long.");
            return;
          }
          registerUser(email, password, name, photoUrl)
            .then((result) => {
              console.log(result);
              setSuccess("Registration Successful");
            })
            .catch((err) => {
              console.log(err.message);
            });
        } else {
          setError("Please fill out all required fields.");
        }
      };

    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Register</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={(e) => setName(e.target.value)} type="text" name='name' placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control
                        type="text"
                        name="photoUrl"
                        placeholder="Photo URL"
                        onChange={(e) => setPhotoUrl(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name="accept" label="Accept Terms and Conditions" />
                </Form.Group>
                <Button onClick={handleRegistration} variant="primary" type="submit">
                    Register
                </Button>
                <p className="text-danger">{error}</p>
                <p className="text-danger">{success}</p>
                <br />
                <Form.Text className="text-secondary">
                    Already Have an Account? <Link to="/login">Login</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;
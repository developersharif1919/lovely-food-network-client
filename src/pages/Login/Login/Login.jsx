/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from '../../../provider/AuthProvider';
import { AiFillGoogleSquare, AiOutlineGithub } from "react-icons/ai";
import { Navigate, useLocation, useNavigate } from "react-router";


const Login = () => {
    const { loginUser, handleGoogleSignIn, handleGitHubSignIn } = useContext(AuthContext)
  let navigate = useNavigate();

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    if ((email, password)) {
      loginUser(email, password)
        .then((result) => {
          console.log(result.user);
          navigate("/");
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
    return (
        <Container className='w-50 mx-auto'>
            <h3>Please Login</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button onClick={handleLogin} variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link to="/register">Register</Link>
                </Form.Text>
                <Form.Text className="text-success d-flex justify-content-center gap-5 mt-3 mb-5">
                   <Button variant="outline-success" onClick={handleGoogleSignIn} className="mr-2 w-100"> <AiFillGoogleSquare className="fs-1"></AiFillGoogleSquare> Google Sign-in</Button>
                   <Button variant="outline-success" onClick={handleGitHubSignIn} className="w-100"> <AiOutlineGithub className="fs-1"></AiOutlineGithub> GitHub Sign-in</Button>
                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;
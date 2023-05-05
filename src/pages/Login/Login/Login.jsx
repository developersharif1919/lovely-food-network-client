/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button, Container, Form, Modal, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from '../../../provider/AuthProvider';
import { AiFillGoogleSquare, AiOutlineGithub } from "react-icons/ai";
import { Navigate, useLocation, useNavigate } from "react-router";
import ModalImage from '../../../assets/self.jpg'


const Login = () => {
  const { loginUser, handleGoogleSignIn, handleGitHubSignIn } = useContext(AuthContext)
  const [showModal, setShowModal] = useState(false);
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // added loading state

  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    if (email && password) {
      setLoading(true); // set loading to true
      loginUser(email, password)
        .then((result) => {
          console.log(result.user);
          setShowModal(true);
          navigate("/");
        })
        .catch((error) => {
          console.log(error.message);
        })
        .finally(() => setLoading(false)); // set loading to false after login is complete
    } else {
      setErrorMessage("Please fill out your email and password");
    }
  };
  return (
    <section>
    <Container className='w-50 mx-auto'>
      <h3 className="fs-1 text-center text-uppercase mt-5" style={{ color: 'green' }}>Please Login</h3>
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
        <Button onClick={handleLogin} className="w-100 fs-1" variant="outline-success" type="submit" disabled={loading}>
          {loading ?
            <div className="d-flex align-items-center justify-content-center">
              <span className="p-0 m-0">Please Wait </span>
              <Spinner as="span" size="sm" role="status" aria-hidden="true" className="mr-2 mt-3" animation="grow" />
              <Spinner as="span" size="sm" role="status" aria-hidden="true" className="mr-2 mt-3" animation="grow" />
              <Spinner as="span" size="sm" role="status" aria-hidden="true" className="mr-2 mt-3" animation="grow" />
            </div>
            :
            <span>Login</span>
          }
        </Button>
        {errorMessage && <div className="text-danger">{errorMessage}</div>}
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
    <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: 'green' }}>Login Successful</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-center">
                        <img className='w-100 mb-5' src={ModalImage} alt="Success" />
                        <p>Thank You For Registration. Enjoy This Website</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
    </section>
  );
};

export default Login;
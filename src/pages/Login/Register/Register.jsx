/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { Button, Container, Form, Modal, Row, Col, Spinner, } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import ModalImg from '../../../assets/self.jpg'

const Register = () => {
    const { registerUser } = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleRegistration = (event) => {
        event.preventDefault();

        if (email && password) {
            if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
              setError(""); // Clear the error message
              setLoading(true); // Set loading to true
              registerUser(email, password, name, photoUrl)
                .then((result) => {
                  console.log(result);
                  setShowModal(true);
                })
                .catch((err) => {
                  console.log(err.message);
                })
                .finally(() => setLoading(false)); // Set loading to false after registration is complete
            } else {
              setError("Password must be at least 6 characters long. one letter (upper or lower case), at least one digit. For Example: Secret123");
            }
          } else {
            setError("Please fill out At Least Email & Password Field");
          }
    };

    return (
        <section>
            <Container className='w-50 mx-auto'>
                <h3 className="fs-1 text-center mt-5 text-uppercase" style={{color:'green'}}>Please Register</h3>
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
                    <Button onClick={handleRegistration} className="w-100 fs-1" variant="outline-success" type="submit" disabled={loading}>
                        {loading ?
                            <div className="d-flex align-items-center justify-content-center">
                                <span className="p-0 m-0">Please Wait </span>
                                <Spinner  as="span" size="sm" role="status" aria-hidden="true" className="mr-2 mt-3" animation="grow" />
                                <Spinner as="span" size="sm" role="status" aria-hidden="true" className="mr-2 mt-3" animation="grow" />
                                <Spinner as="span" size="sm" role="status" aria-hidden="true" className="mr-2 mt-3" animation="grow" />
                            </div>
                            :
                            <span>Register</span>
                        }
                    </Button>
                    {error ? <p className="text-danger mt-2">{error}</p> : null}
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
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: 'green' }}>Registration Successfully</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-center">
                        <img className='w-100 mb-5' src={ModalImg} alt="Success" />
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

export default Register;
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactSection = () => {
  return (
    <section id="contact">
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <img className='w-100' src='https://img.freepik.com/free-vector/phone-telephone-contact_24908-54804.jpg?w=996&t=st=1683189721~exp=1683190321~hmac=4dc86a9757ba4b388b3484a554f9edefa62d2ed65e859f931a0989b8de572d10' alt="Contact us" />
          </Col>
          <Col md={6}>
            <h2>Contact Us</h2>
            <p>Have a question or suggestion? Fill out the form below and we'll get back to you as soon as possible.</p>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter subject" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter message" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;


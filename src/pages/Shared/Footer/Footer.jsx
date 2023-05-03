/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className='mt-4 py-5 container-fluid' style={{background:'#111',paddingTop:'20px', paddingBottom:'20px'}}>
            <Container  className="bg-dark text-white py-3">
                <Row>
                    <Col md={4} className="text-center text-md-start">
                        <h5>Lovely Food Network</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className='text-decoration-none text-white'>Home</Link></li>
                            <li><Link to="/blogs" className='text-decoration-none text-white'>Blogs</Link></li>
                            <li><Link to="/register" className='text-decoration-none text-white'>Register</Link></li>
                        </ul>
                    </Col>
                    <Col md={4} className="text-center text-md-start">
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li>Address: 123 Main St, Anytown USA</li>
                            <li>Phone: 555-555-5555</li>
                            <li>Email: info@lovelyfoodnetwork.com</li>
                        </ul>
                    </Col>
                    <Col md={4} className="text-center text-md-start">
                        <h5>Connect with Us</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className='text-decoration-none text-white'>Facebook</a></li>
                            <li><a href="#" className='text-decoration-none text-white'>Twitter</a></li>
                            <li><a href="#" className='text-decoration-none text-white'>Instagram</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            </div>
            
        </>
    );
};

export default Footer;
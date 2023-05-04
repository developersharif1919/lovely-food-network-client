/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../../../provider/AuthProvider';
import ActiveLink from '../../../components/ActiveLink/ActiveLink';
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [showName, setShowName] = useState(false);

    const handleMouseEnter = () => {
        setShowName(true);
    };

    const handleMouseLeave = () => {
        setShowName(false);
    };
    const handleLogout = () => {
        logOut()
            .then()
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand>
                    <h2>Lovely Food Network</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="m-auto nav-itm">
                        <li><ActiveLink to="/" className='nav-link'>Home</ActiveLink></li>
                        <li><ActiveLink to="/blogs" className='nav-link list-style-none'>Blogs</ActiveLink></li>
                        <li><ActiveLink to="/register" className='nav-link'>Register</ActiveLink></li>
                    </Nav>
                    {user ? (
                        <div className="d-flex align-items-center">
                            <div className="me-3">
                                <img src={user.photoURL} alt=""
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    width="40" height="40" className="rounded-circle" />
                                <div className={`position-absolute bg-white rounded p-1 ${showName ? "" : "d-none"}`}
                                    style={{ top: "15%", right: "20%", transform: "translateY(0)" }}>
                                    {user.displayName}
                                </div>
                            </div>
                            <Button variant="outline-success" className="fw-bold" onClick={handleLogout}>Logout</Button>
                        </div>
                    ) : (
                        <Link to="/login">
                            <Button variant="outline-success" className="fw-bold me-2">
                                <FaUserCircle /> Login
                            </Button>
                        </Link>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;

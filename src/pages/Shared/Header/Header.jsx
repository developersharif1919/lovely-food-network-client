/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../../../provider/AuthProvider';
import { Button } from 'react-bootstrap';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [showName, setShowName] = useState(false);

    const handleMouseEnter = () => {
        setShowName(true);
    };

    const handleMouseLeave = () => {
        setShowName(false);
    };
    console.log(user);

    const handleLogout = () => {
        logOut()
          .then()
          .catch((err) => {
            console.log(err);
          });
      };
    return (
        <Container className='mt-4'>
            <div>
                {/* Header Top */}
                <div className='d-flex justify-content-between align-items-center border'>
                    <div className="logo text-success">
                        <h2>Lovely Food Network</h2>
                    </div>
                    {user ? (
                        <div>
                            <img
                                src={user.photoURL}
                                alt=""
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave} width="40" height="40" className="rounded-circle me-2"
                            />
                            <div
                                className={`position-absolute bg-white rounded p-1 ${
                                    showName ? "" : "d-none"
                                }`}
                                style={{ top: "6%", right: "25%", transform: "translateY(0)" }}
                            >
                                {user.displayName}
                            </div>
                            <button onClick={handleLogout} type="button" className="btn btn-outline-success  fw-bold px-4 ms-2">
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="menu-container d-flex fs-4 fw-bold justify-content-between align-items-center ">
                            <FaUserCircle></FaUserCircle>
                            <Link to="/login">
                                <button type="button" className="btn btn-outline-success  fw-bold px-4 ms-2">
                                    Login
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
                {/* Header Bottom */}
                <div className='text-center mt-3'>
                    <Link to="/" className='text-decoration-none ms-2'>Home</Link>
                    <Link to="/recipe" className='text-decoration-none ms-2'>Chef-Recipe </Link>
                    <Link to="/blogs" className='text-decoration-none ms-2'>Blogs</Link>
                    <Link to="/register" className='text-decoration-none ms-2'>Register</Link>
                </div>
            </div>
        </Container>
    );
};

export default Header;
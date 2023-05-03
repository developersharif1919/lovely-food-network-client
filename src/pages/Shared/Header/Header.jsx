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
        <div className='mt-4 container-fluid' style={{background:'#111',paddingTop:'20px', paddingBottom:'20px'}}>
            <div className='container'>
                {/* Header Top */}
                <div className='d-flex justify-content-between align-items-center border border-success py-3 px-2 mt-2'>
                    <div className="logo text-white">
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
                                style={{ top: "12%", right: "25%", transform: "translateY(0)" }}
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
                <div className='text-center  mt-3'>
                    <Link to="/" className='text-decoration-none ms-2 text-white border px-2 py-1 rounded border-success'>Home</Link>
                    <Link to="/recipe" className='text-decoration-none ms-2 text-white border px-2 py-1 rounded border-success'>Chef-Recipe </Link>
                    <Link to="/blogs" className='text-decoration-none ms-2 text-white border px-2 py-1 rounded border-success'>Blogs</Link>
                    <Link to="/register" className='text-decoration-none ms-2 text-white border px-2 py-1 rounded border-success'>Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
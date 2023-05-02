/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaUserCircle} from "react-icons/fa";
import { AuthContext } from '../../../provider/AuthProvider';
import { Button } from 'react-bootstrap';

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <Container className='mt-4'>
            <div>
                {/* Header Top */}
                <div className='d-flex justify-content-between align-items-center border'>
                    <div className="logo text-success">
                        <h2>Lovely Food Network</h2>
                    </div>
                    {user ?  <Button variant="secondary">Logout</Button> : <div className="menu-container d-flex fs-4 fw-bold justify-content-between align-items-center ">
                        <FaUserCircle></FaUserCircle>
                    <Link to="/login"><button type="button" className="btn btn-outline-success  fw-bold px-4 ms-2">Login</button></Link>
                    </div>}
                </div>
                {/* Header Bottom */}
                <div className='text-center mt-3'>
                    <Link to="/" className='text-decoration-none ms-2'>Home</Link>
                    <Link to="/blogs" className='text-decoration-none ms-2'>Blogs</Link>
                    <Link to="/register" className='text-decoration-none ms-2'>Register</Link>
                </div>
            </div>
        </Container>
    );
};

export default Header;
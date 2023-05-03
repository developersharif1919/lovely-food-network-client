/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './ActiveLink.css'
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <nav>
            <NavLink
                to={to}
                className={({ isActive, isPending }) => isActive ? "active" : ""
                }
            >
                {children}
            </NavLink>
        </nav>
    );
};

export default ActiveLink;
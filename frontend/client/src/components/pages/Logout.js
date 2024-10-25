import React from 'react';
import { Navigate } from 'react-router-dom';

const Logout = ({ handleLogout }) => {
    handleLogout();
    return <Navigate to='/login' />;
};

export default Logout;
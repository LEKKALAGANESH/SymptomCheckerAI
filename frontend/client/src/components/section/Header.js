import React from 'react';
import Navbar from './Navbar';

const Header = ({ token, isLoginIn }) => {
    // console.log(token, isLoginIn);
    return (
        <Navbar isLoginIn={isLoginIn} />
    )
}

export default Header

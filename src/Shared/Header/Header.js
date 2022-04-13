import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/home'>Home</Link>
            {/* <Link to='/'>Home</Link> */}
            <Link to='/services'>Services</Link>
            <Link to='/about'>About</Link>
            {/* <Link to='/home'>Home</Link> */}
        </div>
    );
};

export default Header;
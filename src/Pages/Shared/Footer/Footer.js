import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <footer className='footer'>
            <h1>Mercedes-Benz Warehouse</h1>
            <h4>Copyright © {new Date().getFullYear()}</h4>
        </footer>
    );
};

export default Footer;
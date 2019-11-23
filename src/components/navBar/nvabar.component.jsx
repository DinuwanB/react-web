import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar'


import './header.styles.scss';
 

const Header = () => (
    <div >
        <Navbar bg="light" variant="light" className='header'>
            <Navbar.Brand className='brand-name'>Navbar</Navbar.Brand>
        </Navbar>
    </div>
    
)

export default Header;
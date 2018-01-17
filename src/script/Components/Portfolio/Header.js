import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PersonalInfo from "./PersonalInfo";
import Socials from "./Socials";

class Header extends Component {
    render() {
        return (
            <header className='portfolio-header'>
                <div className='portfolio-container'>
                    <Link to='/'>
                        <img src='img/Portfolio/header_photo.png' alt='' className='portfolio-header__logo'/>
                    </Link>
                    <PersonalInfo/>
                    <Socials/>
                </div>
            </header>
        );
    }
}

export default Header;
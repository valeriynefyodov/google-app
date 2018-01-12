import React, { Component } from 'react';

import PersonalInfo from "./PersonalInfo";
import Socials from "./Socials";

class Header extends Component {
    render() {
        return (
            <header className='portfolio-header'>
                <div className='portfolio-container'>
                    <img src='img/Portfolio/header_photo.png' alt='' className='portfolio-header__logo'/>
                    <PersonalInfo/>
                    <Socials/>
                </div>
            </header>
        );
    }
}

export default Header;
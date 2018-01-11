import React, { Component } from 'react';
import '../../../css/Portfolio/Portfolio.css';
import '../../../css/Portfolio/Header.css';
import Avatar from '../../../img/Portfolio/header_photo.png';

import PersonalInfo from "./PersonalInfo";
import Socials from "./Socials";

class Header extends Component {
    render() {
        return (
            <header className='portfolio-header'>
                <div className='portfolio-container'>
                    <img src={Avatar} alt='' className='portfolio-header__logo'/>
                    <PersonalInfo/>
                    <Socials/>
                </div>
            </header>
        );
    }
}

export default Header;
import React, { Component } from 'react';
import '../../../css/Portfolio/Portfolio.css';
import '../../../css/Portfolio/Socials.css';

class Socials extends Component {
    render() {
        return (
            <div className='portfolio-header-socials'>
                <a href=""><i className="fa fa-github transparent"/></a>
                <a href=""><i className="fa fa-skype transparent"/></a>
                <a href=""><i className="fa fa-vk transparent"/></a>
            </div>
        );
    }
}

export default Socials;
import React, { Component } from 'react';
import '../../../css/BrandName/Menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);

        if (this.props.place === 'header')
            this.state = {
                containerClass: 'header-menu',
                itemClass: 'header-menu__item',
                items: [
                    'Home',
                    'Services',
                    'About Us',
                    'Blog',
                    'Contact Us'
                ]
            };
        else if (this.props.place === 'footer')
            this.state = {
                containerClass: 'footer-menu',
                itemClass: 'footer-menu__item',
                items: [
                    'Company',
                    'Location',
                    'Help',
                    'Advertise',
                    'Terms',
                    'Privacy'
                ]
            };
    }

    render() {
        return (
            <nav className={this.state.containerClass}>
                <ul>
                    {this.state.items.map((element, index) => {
                        return <li className={this.state.itemClass} key={index}>{element}</li>
                    })}
                </ul>
            </nav>
        );
    }
}

export default Menu;
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <Link to='/mail' className='header__link'>Почта</Link>
                <Link to='/images' className='header__link'>Картинки</Link>
                <i className="fa fa-bars header__icon" aria-hidden="true" />
                <i className="fa fa-bell header__icon" aria-hidden="true" />
                <img className='header__avatar' src='http://192.168.1.30:8080/img/avatar.png' alt=''/>
            </div>
        );
    }
}

export default Header
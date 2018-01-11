import React, { Component } from 'react';
import Logo from '../../../img/Google/googlelogo.png';
import '../../../css/Google/Content.css';

import Search from './Search';
import Recent from './Recent';

class Content extends Component {
    render () {
        return (
            <div className='content'>
                <img src={Logo} className='content__logo' alt='Google' title='Google' />
                <Search/>
                <Recent/>
            </div>
        );
    }
}

export default Content;

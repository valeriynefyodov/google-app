import React, { Component } from 'react';

import Search from './Search';
import Recent from './Recent';

class Content extends Component {
    render () {
        return (
            <div className='content'>
                <img src='img/Google/googlelogo.png' className='content__logo' alt='Google' title='Google' />
                <Search/>
                <Recent/>
            </div>
        );
    }
}

export default Content;

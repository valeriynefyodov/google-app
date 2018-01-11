import React, { Component } from 'react';
import '../../css/Google/Google.css';

import Header from '../Components/Google/Header';
import Content from '../Components/Google/Content';

class Google extends Component {
    render () {
        return (
            <div className='brandname-wrapper'>
                <Header/>
                <Content/>
            </div>
        );
    }
}

export default Google;

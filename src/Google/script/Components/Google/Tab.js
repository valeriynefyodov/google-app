import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../css/Google/Tab.css';

const HOST = 'http://192.168.1.30:8088';

class Tab extends Component {
    render () {
        return (
            <Link to={this.props.data.path} className='tab__link'>
                <div className='tab'>
                    <div className='tab__header'>
                        <img className='tab__header-favicon' src={HOST + this.props.data.faviconPath} alt=''/>
                        <div className='tab__header-title'>{this.props.data.title}</div>
                    </div>
                    <img className='tab__screenshot' src={HOST + this.props.data.screenshotPath} alt=''/>
                </div>
            </Link>
        );
    }
}

export default Tab;

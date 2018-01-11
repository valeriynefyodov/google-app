import React, { Component } from 'react';
import '../../../css/Portfolio/BlockTitle.css';

class BlockTitle extends Component {
    render() {
        return (
            <div className='block-title'>
                <h1 className='block-title__main'>{this.props.mainTitle}</h1>
                <h2 className='block-title__subtitle'>{this.props.subtitle}</h2>
            </div>
        );
    }
}

export default BlockTitle;
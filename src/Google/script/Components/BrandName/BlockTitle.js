import React, { Component } from 'react';
import '../../../css/BrandName/BlockTitle.css';

class BlockTitle extends Component {
    render() {
        return <h3 className={`brandname-block-title ${this.props.class}`}>{this.props.title}</h3>;
    }
}

export default BlockTitle;
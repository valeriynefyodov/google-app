import React, { Component } from 'react';
import brandnameStore from '../../Stores/BrandNameStore';
import '../../../css/BrandName/BlockTitle.css';

class BlockTitle extends Component {

    componentWillMount() {
        this.setState({
            data: brandnameStore.getTitlesData(this.props.place)
        })
    }

    render() {
        return <h3 className={`brandname-block-title ${this.state.data.class}`}>{this.state.data.title}</h3>;
    }
}

export default BlockTitle;
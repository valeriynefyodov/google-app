import React, { Component } from 'react';
import $ from 'jquery';
import '../../../css/Google/Recent.css';

import Tab from './Tab';

const HOST = 'http://192.168.1.30:8088';

class Recent extends Component {

    constructor(props) {
        super(props);
        this.state = {tabs_data: []};
    }

    componentWillMount() {
        const th = this;
        $.getJSON(HOST + '/tabs_data.json', function (data) {
            th.setState({tabs_data: data});
        });
    }

    render () {
        return (
            <div className='recent-tabs'>
                {this.state.tabs_data.map( (item, index) => {
                    return <Tab data={item} key={index}/>
                })}
            </div>
        );
    }
}

export default Recent;

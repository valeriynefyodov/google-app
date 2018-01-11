import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TabRouter extends Component {
    render () {

        let tabNumber = parseInt(this.props.match.params.number, 10);

        if (tabNumber > 8)
            return <div><h1>Sorry, there's no such tab</h1><Link to='/'>Home</Link></div>;

        return <div><h1>This is Tab #{tabNumber}</h1><Link to='/'>Home</Link></div>;
    }
}

export default TabRouter;

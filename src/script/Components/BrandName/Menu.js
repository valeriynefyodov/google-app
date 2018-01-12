import React, { Component } from 'react';
import brandnameStore from '../../Stores/BrandNameStore';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = brandnameStore.getMenuData(this.props.place);
    }

    render() {
        return (
            <nav className={this.state.containerClass}>
                <ul>
                    {this.state.items.map((element, index) => {
                        return <li className={this.state.itemClass} key={index}>{element}</li>
                    })}
                </ul>
            </nav>
        );
    }
}

export default Menu;
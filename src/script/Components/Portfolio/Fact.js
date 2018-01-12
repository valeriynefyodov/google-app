import React, { Component } from 'react';
import '../../../css/Portfolio/Fact.css';

class Fact extends Component {
    render() {
        return (
            <div className='student-fact'>
                <div className={'student-fact__image ' + this.props.type}/>
                <h4 className='student-fact__title'>{this.props.title}</h4>
                <p className='student-fact__content'>{this.props.text}{this.props.link}</p>
            </div>
        );
    }
}

export default Fact;
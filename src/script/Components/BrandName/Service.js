import React, { Component } from 'react';

class Service extends Component {

    componentWillMount() {
        if(this.props.data.isDecor)
            this.decor = <img className={`brandname-services__decoration`} src='img/BrandName/decor.png' alt=""/>;
         else
             this.decor = null;
    }

    render() {
        return (
            <div className='brandname-service'>
                <div className={`brandname-service__img ${this.props.data.imageClass}`}/>
                {this.decor}
                <h6 className='brandname-service__title'>{this.props.data.title}</h6>
                <p className='brandname-service__subtitle'>{this.props.data.subtitle}</p>
            </div>
        );
    }
}

export default Service;
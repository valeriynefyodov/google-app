import React, { Component } from 'react';
import '../../../css/Portfolio/Portfolio.css';
import '../../../css/Portfolio/PersonalInfo.css';

class PersonalInfo extends Component {
    render() {
        return (
            <div className='portfolio-header-personal'>
                <h3 className='portfolio-header-personal__name'>Быстров Борис Викторович</h3>
                <a href='mailto:bystrov@gmail.com' className='portfolio-header-personal__mail transparent'>bystrov@gmail.com</a>
            </div>
        );
    }
}

export default PersonalInfo;
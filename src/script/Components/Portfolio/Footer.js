import React, { Component } from 'react';
import '../../../css/Portfolio/Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className='portfolio-footer'>
                <div className='portfolio-container'>
                    <p className='portfolio-footer_text transparent'>А это футер, с текстом внутри. Он должен быть прибит к низу окна браузера, не зависимо от количества контента на странице и размера окна.</p>
                </div>
            </footer>
        );
    }
}

export default Footer;
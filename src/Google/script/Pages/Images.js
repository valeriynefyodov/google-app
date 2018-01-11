import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Image from '../Components/Images/Image';
import ImagesStore from '../Stores/ImagesStore'
import * as ImagesActions from '../Actions/ImagesActions';

class Images extends Component {
    constructor(props) {
        super(props);

        this.getImages = this.getImages.bind(this);
        this.state = {
            imagesList: ImagesStore.getAll()
        };
    }


    getImages() {
        this.setState({imagesList: ImagesStore.getAll()});
    }

    uploadImage() {
        let color = "#"+((1<<24)*Math.random()|0).toString(16);
        ImagesActions.uploadImage(color);
    }

    componentWillMount() {
        ImagesStore.on('image uploaded', this.getImages);
    }

    componentWillUnmount() {
        ImagesStore.removeListener('image uploaded', this.getImages);
    }


    render () {
        return (
            <div>
                <h1>This is Images</h1>
                <Link to='/'>Home</Link>
                <br/>
                <br/>
                <button style={{display: "block"}} onClick={this.uploadImage.bind(this)}>Upload Image</button>
                {this.state.imagesList.map((item, index) => {
                    return <Image key={index} style={item}/>
                })}
            </div>
        );
    }
}

export default Images;

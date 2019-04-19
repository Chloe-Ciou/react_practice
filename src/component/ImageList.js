import React from 'react';
import './css/ImageList.css';
import ImageCard from './ImageCard';

class ImageList extends React.Component {

    getImages = () => {
        return this.props.images.map(image => {
            return (
                <ImageCard key={image.id} image={image}/>
            )
        });
    }

    render() {
        return (
            <div className='ui items'>{this.getImages()}</div>
        )
    }
}

export default ImageList;
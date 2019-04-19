import React from 'react';
import faker from 'faker/locale/en_US';

class ImageCard extends React.Component{
    /*
    constructor(props){
        super(props);
        this.state = {spans: 0};
        this.imageRef = React.createRef();
    }

    componentDidMount(event) {
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({spans})
    }
*/
    render() {
        const {description, urls} = this.props.image;
        return (
            <div className="item">
                <div className="ui small image">
                    <img alt={description}
                         src={urls.regular} />
                </div>
                <div className="middle aligned content">
                    <div className="header">
                        {faker.lorem.words()}
                    </div>
                    <div className="description">
                        <p>{faker.lorem.paragraph()}</p>
                    </div>
                    <div className="extra">
                        <div className="ui right floated button">
                            Action
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageCard;
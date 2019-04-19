import React from 'react';
import unsplash from './unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class NotFound extends React.Component {
    state = {images: []}
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {query: term}
        })
        this.setState({images: response.data.results})
    }

    render() {
        return (
            <div style={{margin: '10px 30px 0px'}}>
                <div className="ui secondary  menu">
                    <a className="item" href='/'>
                        Home
                    </a>
                    <a className="item" href='/search'>
                        Hot
                    </a>
                    <a className="item" href='/songs'>
                        My Songs
                    </a>
                    <a className="item" href='/friends'>
                        Friends
                    </a>
                    <div className="right menu">
                        <div className="item" href='/'>
                            <div className="ui icon input">
                                <SearchBar onSubmit={this.onSearchSubmit}/>
                                <i className="search link icon"></i>
                            </div>
                        </div>
                        <a className="ui item" href='/'>
                            Logout
                        </a>
                    </div>
                </div>
                <ImageList images={this.state.images}/>
                <div>
                    {this.props.children}
                </div>
            </div>

        )
    }
}

export default NotFound;
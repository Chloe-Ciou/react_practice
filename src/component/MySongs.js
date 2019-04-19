import React from 'react';
import MySongsDetails from './MySongsDetails';
import faker from 'faker/locale/en_US';

class MySongs extends React.Component {

    render() {
        let songs = [];
        for (let i = 0; i < 3; ++i) {
            songs.push(
                <div className="ui card" style={{margin: '20px auto'}}>
                    <a className="image" href="#">
                        <img alt='image' src={faker.random.image()} />
                    </a>
                    <div className="content">
                        <a className="header" href="#">{faker.lorem.words()}</a>
                        <div className="meta">
                            <MySongsDetails />
                        </div>
                    </div>
                </div>
                )
        }

        return (
            <dvi className='ui link cards'>
                {songs}
            </dvi>
        )
    }
}

export default MySongs;
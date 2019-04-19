import React from 'react';
import Friend from './Friend';
import faker from 'faker/locale/en_US';


class FriendContainer extends React.Component {
    render() {
        let friends = [];
        const num = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
        for (let i = 0; i < num; ++i) {
            friends.push(
                <Friend
                    avatar={faker.image.image()}
                    name={faker.name.findName()}
                    date={faker.date.past().toISOString().substr(0, 10)}
                    text={faker.lorem.text()}
                    num={faker.random.number()}
                />)
        }
        return (
            <div className='ui link cards'>
                {friends}
            </div>
        )
    }
}

export default FriendContainer;
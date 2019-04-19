import React from 'react';
import faker from 'faker/locale/en_US';

class MySongsDetails extends React.Component {
    render() {
        return (
            <div>
                <div className="ui small comments">
                    <h3 className="ui dividing header"></h3>
                    <div className="comment">
                        <a className="avatar">
                            <img src={faker.image.avatar()} />
                        </a>
                        <div className="content">
                            <a className="author">{faker.name.findName()}</a>
                            <div className="metadata">
                                <span className="date">{faker.date.past().toString().substr(0, 24)}</span>
                            </div>
                            <div className="text">
                                {faker.lorem.sentence()}
                            </div>
                            <div className="actions">
                                <a className="reply">Reply</a>
                            </div>
                        </div>
                    </div>
                    <div className="comment">
                        <a className="avatar">
                            <img src={faker.image.avatar()} />
                        </a>
                        <div className="content">
                            <a className="author">{faker.name.findName()}</a>
                            <div className="metadata">
                                <span className="date">{faker.date.past().toString().substr(0, 24)}</span>
                            </div>
                            <div className="text">
                                <p>{faker.lorem.word()}</p>
                            </div>
                            <div className="actions">
                                <a className="reply">Reply</a>
                            </div>
                        </div>
                        <div className="comments">
                            <div className="comment">
                                <a className="avatar">
                                    <img src={faker.image.avatar()} />
                                </a>
                                <div className="content">
                                    <a className="author">{faker.name.findName()}</a>
                                    <div className="metadata">
                                        <span className="date">Just now</span>
                                    </div>
                                    <div className="text">
                                        {faker.lorem.words()}
                                    </div>
                                    <div className="actions">
                                        <a className="reply">Reply</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="comment">
                        <a className="avatar">
                            <img src={faker.image.avatar()} />
                        </a>
                        <div className="content">
                            <a className="author">{faker.name.findName()}</a>
                            <div className="metadata">
                                <span className="date">{faker.date.past().toString().substr(0, 24)}</span>
                            </div>
                            <div className="text">
                                {faker.lorem.sentences()}
                            </div>
                            <div className="actions">
                                <a className="reply">Reply</a>
                            </div>
                        </div>
                    </div>
                    <form className="ui reply form">
                        <div className="field">
                            <textarea></textarea>
                        </div>
                        <div className="ui blue labeled submit icon button">
                            <i className="icon edit"></i> Add Reply
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default MySongsDetails;
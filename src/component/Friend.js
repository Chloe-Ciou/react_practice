import React from 'react';

class Friend extends React.Component {
    render() {
        return (
            <div className="ui card" style={{margin: '20px auto'}}>
                <div className="image">
                    <img alt='avatar' src={this.props.avatar}/>
                </div>
                <div className="content">
                    <a href='#' className="header">{this.props.name}</a>
                    <div className="meta">
                        <span className="date">Joined in {this.props.date}</span>
                    </div>
                    <div className="description">
                        {this.props.text}
                    </div>
                </div>
                <div className="extra content">
                    <a href='#'>
                        <i className="user icon"></i>
                        {this.props.num} Friends
                    </a>
                    <div className='ui label right floated'>
                        <a href='#' >
                            <i className="mail icon"></i> Message
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Friend;
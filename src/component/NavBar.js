import React from 'react';

class NavBar extends React.Component {

    render() {
        return (
            <div style={{margin: '10px 30px 0px'}}>
                <div className="ui menu">
                    <a className="item" href='/'>Home</a>
                    <a className="item" href='/search'>Hot</a>
                    <a className="item" href='/songs'>My Songs</a>
                    <a className="item" href='/friends'>Friends</a>
                    <div className="right menu">
                        <a className="item" href='/'>Account</a>
                        <a className="item" href='/'>Help</a>
                    </div>
                </div>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default NavBar;
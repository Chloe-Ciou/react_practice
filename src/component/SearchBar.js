import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''}
    onFromSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.onFromSubmit}>
                    <div className='field'>
                        <label>Songs Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({term: e.target.value})}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
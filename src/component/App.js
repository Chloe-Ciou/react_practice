import React from 'react';
import {Route, Switch} from 'react-router-dom';
import NavBar from './NavBar';
import NotFound from './NotFound';
import FriendContainer from './FriendContainer';
import SearchSongs from './SearchSongs';
import MySongs from './MySongs';

const App = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <NavBar>
                    <h1>Home</h1>
                </NavBar>
            </Route>
            <Route exact path='/songs'>
                <NavBar>
                    <MySongs />
                </NavBar>
            </Route>
            <Route exact path='/search'>
                <NavBar>
                    <SearchSongs />
                </NavBar>
            </Route>
            <Route exact path='/friends'>
                <NavBar>
                    <FriendContainer />
                </NavBar>
            </Route>
            <Route component={NotFound}/>
        </Switch>
    )
}

export default App;
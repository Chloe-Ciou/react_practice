
import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {title: 'Hi'}
    ]
}

export default combineReducers({
    songs: songsReducer
})
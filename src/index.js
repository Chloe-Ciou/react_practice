import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import {BrowserRouter} from 'react-router-dom';
import App from './component/App';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={createStore(reducers)}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.querySelector('#root')
);
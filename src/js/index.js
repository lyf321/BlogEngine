import HelloContainer from './container/hello';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducers from './reducer/hello';
import {Provider} from 'react-redux';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <HelloContainer />
    </Provider>,
    document.getElementById("root")
);

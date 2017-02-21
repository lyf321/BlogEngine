import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory,browserHistory} from 'react-router';
import reducer from './reducer/reducer';
import PersonBlog from './container/personBlog-container'
import WriteBlog from './container/writeBlog-container'

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={PersonBlog}/>
            <Route path="writeBlog" component={WriteBlog}/>
        </Router>
    </Provider>,
    document.getElementById("root")
);

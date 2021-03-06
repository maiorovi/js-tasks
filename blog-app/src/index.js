import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import reducers from './reducers';
import PostIndex from './components/post_index.js';
import promise from 'redux-promise'
import PostNew from "./components/post_new.js";
import PostShow from './components/posts_show.js';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/posts/new" component={PostNew} />
                <Route path="/posts/:id" component={PostShow} />
                <Route path="/" component={PostIndex} />
            </Switch>
        </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

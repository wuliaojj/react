import React from 'react';
import ReactDom from 'react-dom'
import 'antd-mobile/dist/antd-mobile.css'   //antd-mobile的css
import reducers from './reducers';
import { BrowserRouter, Route, Redirect,Switch} from 'react-router-dom';
import {createStore,applyMiddleware,compose} from 'redux'   
import {Provider} from 'react-redux'    //用来连接react和redux
import thunk from 'redux-thunk'
import Dashboard from './Dashboard.js'
import Auth from './Auth.js'
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension():f=>f
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    reduxDevtools
))
console.log(store.getState());

ReactDom.render(
    (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/dashboard' component={Dashboard}></Route>
                <Route path='/login' component={Auth}></Route>
                <Redirect to='/dashboard'></Redirect>
            </Switch>
        </BrowserRouter>
    </Provider>
    ),  
    document.getElementById('root')
)
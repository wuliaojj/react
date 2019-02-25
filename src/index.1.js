import React from 'react';
import ReactDom from 'react-dom'
import 'antd-mobile/dist/antd-mobile.css'   //antd-mobile的css
import App from './App'
import { BrowserRouter, Route, Link, Redirect,Switch} from 'react-router-dom';
import {createStore,applyMiddleware,compose} from 'redux'   
import {Provider} from 'react-redux'    //用来连接react和redux
import thunk from 'redux-thunk'
// import { counter, addGun, removeGun, addGunAsync} from './index.rudex.js'
import { counter} from './index.rudex.js'
// import { Switch } from 'antd-mobile';

//判断devToolsExtension是否存在
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension():f=>f
// const store = createStore(counter)
// const store = createStore(counter, applyMiddleware(thunk))
const store = createStore(counter, compose(
    applyMiddleware(thunk),
    reduxDevtools
))

//当用上react-redux,就不需要写这么复杂的代码了
// function render() {

//     ReactDom.render(<App store={store} addGun={addGun} removeGun={removeGun} addGunAsync={addGunAsync}/>, document.getElementById('root'))
// }
// render()
// store.subscribe(render)

function Erying() {
    return <h2>二营</h2>
}
function Qibingying() {
    return <h2>骑兵营</h2>
}

// function Test() {
//     return <h2>{this.props.match.params.location}</h2>
// }

ReactDom.render(
    (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to='/'>一营</Link>
                    </li>
                    <li>
                        <Link to='/erying'>二营</Link>
                    </li>
                    <li>
                        <Link to='/qibinglian'>骑兵营</Link>
                    </li>
                    {/* <li>
                        <Link to='/test'>测试</Link>
                    </li> */}
                </ul>
                {/* Switch只渲染第一个被命中的route */}
                {/* <Switch>
                    
                    <Redirect to='/qibinglian'></Redirect>
                    <Route path='/' exact component={App}></Route>
                    <Route path='/erying' exact component={Erying}></Route>
                    <Route path='/qibinglian' exact component={Qibingying}></Route>
                </Switch> */}
                <Redirect to='/qibinglian'></Redirect>
                <Route path='/' exact component={App}></Route>
                <Route path='/erying' exact component={Erying}></Route>
                <Route path='/qibinglian' exact component={Qibingying}></Route>
                {/* <Route path='/test:location' exact component={Test}></Route> */}
            </div>
        </BrowserRouter>
    </Provider>
    ),  
    document.getElementById('root')
)
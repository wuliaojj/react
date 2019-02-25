import React from 'react';
import ReactDom from 'react-dom'
import 'antd-mobile/dist/antd-mobile.css'   //antd-mobile的css
import App from './App'
import {createStore,applyMiddleware,compose} from 'redux'   
import {Provider} from 'react-redux'    //用来连接react和redux
import thunk from 'redux-thunk'
// import { counter, addGun, removeGun, addGunAsync} from './index.rudex.js'
import { counter} from './index.rudex.js'

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

ReactDom.render(
    (
    <Provider store={store}>
    <App />
    </Provider>
    ),
    document.getElementById('root')
)
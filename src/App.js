// import React from 'react'
// import { Button } from 'antd-mobile';
// class App extends React.Component{

//     render(){
//         const store = this.props.store
//         const addGun = this.props.addGun
//         const removeGun = this.props.removeGun
//         const addGunAsync = this.props.addGunAsync
//         const num = store.getState()
//         return (
//             <div>
//                 <h1>现在有{num}把机枪</h1>
//                 <Button onClick={() => store.dispatch(addGun())}>申请机枪</Button>
//                 <Button onClick={() => store.dispatch(removeGun())}>销毁机枪</Button>
//                 <Button onClick={() => store.dispatch(addGunAsync())}>异步申请机枪</Button>
//             </div>
            
//         )
//     }
// }

// export default App

//react-redux重写
import React from 'react'
import { Button } from 'antd-mobile';
import { connect} from 'react-redux';
import {addGun,removeGun,addGunAsync} from './index.rudex.js'

// const mapStatetoProps = (state) => {
//     return { num: state }
// }
// const actionCreators = { addGun, removeGun, addGunAsync }
// @connect(mapStatetoProps, actionCreators)

class App extends React.Component{

    render(){
        // const num = this.props.num
        // const addGun = this.props.addGun
        // const removeGun = this.props.removeGun
        // const addGunAsync = this.props.addGunAsync
        return (
            <div>
                <h1>现在有{this.props.num}把机枪</h1>
                <Button onClick={this.props.addGun}>申请机枪</Button>
                <Button onClick={this.props.removeGun}>销毁机枪</Button>
                <Button onClick={this.props.addGunAsync}>异步申请机枪</Button>
            </div>

        )
    }
}


const mapStatetoProps = (state)=>{
    return { num: state.counter}
}
const actionCreators = { addGun, removeGun, addGunAsync }

// 第一个参数state的什么属性放到props里，state的什么方法放在props里
App = connect(mapStatetoProps, actionCreators)(App)
export default App
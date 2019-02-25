import React from 'react'
import {connect} from 'react-redux'
import { login} from './auth.redux'
import { Redirect} from 'react-router-dom'
@connect(
    state=>state.auth,
    { login}
)

//两个reducers，每个reducers都有一个state
//合并reducers，用combineReducers
class Auth extends React.Component {
    render() {
        return (
            <div>
                {this.props.isAuth ? <Redirect to='/dashboard'></Redirect>: null}
                <h2>你没有权限</h2>
                <button onClick={this.props.login}>登录</button>
            </div>
        )
    }
}

export default Auth
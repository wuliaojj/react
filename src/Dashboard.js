import React from 'react'
import App from './App'
import { Route, Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from './auth.redux'
function Erying() {
    return <h2>二营</h2>
}
function Qibingying() {
    return <h2>骑兵营</h2>
}
//第二种绑定方法
@connect(
    state=>state.auth,
    {logout}
)

class Dashboard extends React.Component {
    // constructor(props){
    //     super(props)
    // }
    render() {
        console.log(this.props);
        const redirectToLogin = <Redirect to='/login'></Redirect>
        const app = (<div>
            {this.props.isAuth ? <button onClick={this.props.logout}>注销</button>:null}
                        <ul>
                            <li>
                                <Link to={`${this.props.match.url}`}>一营</Link>
                            </li>
                            <li>
                                <Link to='/dashboard/erying/'>二营</Link>
                            </li>
                            <li>
                                <Link to='/dashboard/qibinglian/'>骑兵营</Link>
                            </li>
                        </ul>
                        <Route path='/dashboard' exact component={App}></Route>
                        <Route path='/dashboard/erying' component={Erying}></Route>
                        <Route path='/dashboard/qibinglian' component={Qibingying}></Route>
                    </div>)
        return this.props.isAuth ? app : redirectToLogin
    }
}

export default Dashboard
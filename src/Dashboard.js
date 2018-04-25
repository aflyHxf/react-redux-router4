import React from 'react'
import {Link, Redirect, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import App from './App'
import {logout} from "./Auth.redux";


class Erying extends React.Component {
    render() {
        return <h2>二营</h2>
    }
}

class Qibinglian extends React.Component {
    render() {
        return <h2>骑兵连</h2>
    }
}

@connect(
    state => state.auth,
    {logout}
)

class Dashboard extends React.Component {
    render() {
        const match = this.props.match
        const RedirectToLogin = <Redirect to='/login'></Redirect>
        const app =
            (<div>
                <h1>独立团</h1>
                {this.props.isAuth ? <button onClick={this.props.logout}>注销</button> : null}
                <ul>
                    <li><Link to={`${match.url}`}>一营</Link></li>
                    <li><Link to={`${match.url}/erying`}>二营</Link></li>
                    <li><Link to={`${match.url}/qibinglian`}>骑兵连</Link></li>
                </ul>
                <Route exact path={`${match.url}`} component={App}/>
                <Route path={`${match.url}/erying`} component={Erying}/>
                <Route path={`${match.url}/qibinglian`} component={Qibinglian}/>
            </div>)
        return this.props.isAuth ? app : RedirectToLogin
    }
}

export default Dashboard
import React from 'react'
import ReactDom from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {
    BrowserRouter,
    Route, Switch,
    Redirect
} from 'react-router-dom'

import reducers from './reducer'
import Auth from './Auth'
import Dashborad from './Dashboard'

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))


ReactDom.render(
    (<Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Auth}></Route>
                <Route path="/dashboard" component={Dashborad}></Route>
                <Redirect to="/dashboard"></Redirect>
            </Switch>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)
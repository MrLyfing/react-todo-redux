/**
 * Created by Lyfing on 30/11/2016.
 */

import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory} from 'react-router'
import App from './App'

export default class Root extends React.Component {
    render() {
        const store = this.props.store;

        return (
            <Provider store={store}>
                <Router history={hashHistory}>
                    <Route path="/(:filter)" component={App} />
                </Router>
            </Provider>
        )
    }
}


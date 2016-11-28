/**
 * Created by Lyfing on 15/10/2016.
 */

import React from 'react'
import ReactDom from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
import rootReducer from './reducers/rootReducer'

let store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState());
});

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);





/**
 * Created by Lyfing on 15/10/2016.
 */

import React from 'react'
import { render } from 'react-dom'
import configureStore from './configureStore'

import Root from './components/Root'

const store = configureStore();

render(
    <Root store={store} />,
    document.getElementById('app')
);





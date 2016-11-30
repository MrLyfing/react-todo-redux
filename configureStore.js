/**
 * Created by Lyfing on 30/11/2016.
 */

import { createStore } from 'redux'
import { loadState, saveState} from './localStorage'
import { throttle } from 'lodash'

import rootReducer from './reducers/rootReducer'

const configureStore = () => {
    const persistedData = loadState();
    const store = createStore(rootReducer, persistedData);

    store.subscribe(throttle(() => {
        saveState({
            todos: store.getState().todos
        });
    }, 1000));

    return store;
};


export default configureStore;

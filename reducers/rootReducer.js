/**
 * Created by Lyfing on 15/10/2016.
 */

import { combineReducers } from 'redux'
import todos, * as fromTodos from './todos'

const rootReducer = combineReducers({
    todos //Equivalent to todos: todos
});

export default rootReducer;

export const getVisibleTodos = (state, filter) => {
    return fromTodos.getTodosFromFilter(state, filter);
};


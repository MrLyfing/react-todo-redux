/**
 * Created by Lyfing on 15/10/2016.
 */

import _ from 'underscore';

const todos = (state = [], action) => {

    switch(action.type) {
        case 'ADD_TODO':
            return [...state, {
                id: action.payload.id,
                task: action.payload.task,
                completed: false
            }];

        case 'TOGGLE_TODO':
            return _.map(state, (todo) => {
                if (action.payload.id !== todo.id)
                    return todo;
                else
                    return Object.assign({}, todo, {completed: !todo.completed});
            });

        case 'DELETE_TODO':
            return _.filter(state, (todo) => {
                return todo.id !== action.payload.id;
            });

        case 'SAVE_TODO':
            return _.map(state, (todo) => {
                if (action.payload.id === todo.id)
                    return Object.assign({}, todo, {task: action.payload.task});
                else
                    return todo;
            });

        default:
            return state;
    }
};

export default todos;

//Selector function
export const getTodosFromFilter = (state, filter) => {

    console.log('STATE :', state);
    return state;
    switch(filter) {
        case 'all':
            return state;
        case 'active':
            return state.filter((todo) => {
                return !todo.completed;
            });
        case 'completed':
            return state.filter((todo) => {
                return todo.completed;
            });
        default:
            return state;
    }
};

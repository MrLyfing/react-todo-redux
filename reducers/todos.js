/**
 * Created by Lyfing on 15/10/2016.
 */

import _ from 'underscore';

const defaultTodos = [
    {
        id: 0,
        task: 'Do the laundery',
        completed: false
    },
    {
        id: 1,
        task: 'Clean the kitchen',
        completed: false
    }
];

const todos = (state = defaultTodos, action) => {

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

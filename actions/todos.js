/**
 * Created by Lyfing on 15/10/2016.
 */

import { v4 } from 'node-uuid'

export const addTodo = (task) => ({
    type: 'ADD_TODO',
    payload: {
        id: v4(),
        task
    }
});

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    payload: {id}
});

export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    payload: {id}
});

export const saveTodo = (id, task) => ({
    type: 'SAVE_TODO',
    payload: {id, task}
});



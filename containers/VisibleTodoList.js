/**
 * Created by Lyfing on 06/11/2016.
 */

import React from 'react';
import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { deleteTodo, toggleTodo, saveTodo } from '../actions/todos'

const getTodosFromFilter = (todos, filter) => {
    switch(filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter((todo) => {
                return !todo.completed;
            });
        case 'SHOW_COMPLETED':
            return todos.filter((todo) => {
                return todo.completed;
            });
        default:
            return todos;
    }
};

const mapStateToProps = (state) => {
    return {
        todos: getTodosFromFilter(state.todos, state.visibilityFilter)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (id) => {
            dispatch(deleteTodo(id));

        },
        toggleTodo: (id) => {
            dispatch(toggleTodo(id));
        },
        saveTodo: (id, task) => {
            dispatch(saveTodo(id, task));
        }
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;


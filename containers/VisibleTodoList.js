/**
 * Created by Lyfing on 06/11/2016.
 */

import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import TodoList from '../components/TodoList'
import { getVisibleTodos }from '../reducers/rootReducer'
import { deleteTodo, toggleTodo, saveTodo } from '../actions/todos'

const mapStateToProps = (state, ownProps) => {
    return {
        todos: getVisibleTodos(
            state.todos,
            ownProps.params.filter || 'all'
        )
    };
};

const mapDispatchToProps = (dispatch) => ({
    deleteTodo: (id) => {
        dispatch(deleteTodo(id));

    },
    toggleTodo: (id) => {
        dispatch(toggleTodo(id));
    },
    saveTodo: (id, task) => {
        dispatch(saveTodo(id, task));
    }
});

const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList));

export default VisibleTodoList;


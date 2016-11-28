/**
 * Created by Lyfing on 15/10/2016.
 */

import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todos'

class AddTodo extends React.Component {

    onSubmitTask(e) {
        e.preventDefault();
        var taskInput = this.refs.taskInput;
        let { dispatch } = this.props;
        if (!taskInput.value)
            return;

        dispatch(addTodo(taskInput.value));
        taskInput.value = '';
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitTask.bind(this)}>
                    <div class="row">

                        <div class="col-md-12">
                            <div class="form-group">
                                <div class="input-group">
                                    <input type="text" placeholder="What do you want to do" ref="taskInput"
                                           class="form-control"/>
                                <span class="input-group-btn">
                                    <button type="submit" class="btn btn-primary">Create</button>
                                </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        )
    }
}

AddTodo = connect()(AddTodo);
export default AddTodo

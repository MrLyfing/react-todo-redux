/**
 * Created by Lyfing on 06/11/2016.
 */

import React from 'react'

export default class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            editInput: this.props.todo.task
        };
    }

    onClickEditTodo(editMode) {
        this.setState({editMode})
    }

    onClickDeleteTodo(id) {
        this.props.deleteTodo(id);
    }

    onChangeEditInput(e) {
        this.setState({editInput: e.target.value});
    }

    onClickSaveTodo(id) {
        if (this.state.editInput) {
            this.props.saveTodo(id, this.state.editInput);
            this.setState({editMode: false});
        }
    }

    onClickArchivedTodo(id) {
        this.props.toggleTodo(id);
    }

    renderTaskSection() {
        let {todo} = this.props;
        let taskStyle = {
            cursor: 'pointer',
            fontSize: '25px'
        };

        if (todo.completed)
            taskStyle['textDecoration'] = 'line-through';

        if (this.state.editMode) {
            return (
                <div>
                    <input type="text" defaultValue={todo.task} onChange={this.onChangeEditInput.bind(this)}
                           class="form-control"/>
                </div>
            )
        } else {
            return (
                <div style={taskStyle}>
                    {todo.task}
                </div>
            )
        }

    }

    renderActionsSection() {
        let {todo} = this.props;

        if (!todo.completed) {

            if (this.state.editMode) {
                return (
                    <div>
                        <button class="btn btn-primary" style={{marginRight: '5px'}}
                                onClick={this.onClickSaveTodo.bind(this, todo.id)}>Save
                        </button>
                        <button class="btn btn-danger" onClick={this.onClickEditTodo.bind(this, false)}>Cancel</button>
                    </div>
                )
            } else {
                return (
                    <div>
                        <button class="btn btn-success" style={{marginRight: '5px'}}
                                onClick={this.onClickArchivedTodo.bind(this, todo.id)}>Done
                        </button>
                        <button class="btn btn-primary" style={{marginRight: '5px'}}
                                onClick={this.onClickEditTodo.bind(this, true)}>Edit
                        </button>
                        <button class="btn btn-danger" onClick={this.onClickDeleteTodo.bind(this, todo.id)}>Delete
                        </button>
                    </div>
                )
            }
        }
        else {
            return (
                <div>
                    <button class="btn btn-danger" style={{marginRight: '5px'}}
                            onClick={this.onClickArchivedTodo.bind(this, todo.id)}>Remove from completed
                    </button>
                </div>
            )
        }
    }

    render() {
        //console.log('TODO PROPS :', this.props);
        return (
            <div class="well">
                <div class="row">
                    <div class="col-md-7">
                        {this.renderTaskSection()}
                    </div>

                    <div class="col-md-5">
                        <div class="pull-right">
                            {this.renderActionsSection()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



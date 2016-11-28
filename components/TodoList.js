/**
 * Created by Lyfing on 06/11/2016.
 */

import React from 'react'
import _ from 'lodash'

import Todo from '../components/Todo'

export default class TodoList extends React.Component {
    render() {
        console.log('TODO LIST PROPS :', this.props);
        return (
            <div>
                {
                    _.map(this.props.todos, (todo, index) =>
                        <Todo
                            key={index}
                            todo={todo}
                            deleteTodo={this.props.deleteTodo}
                            toggleTodo={this.props.toggleTodo}
                            saveTodo={this.props.saveTodo}
                        />
                    )
                }
            </div>
        )
    }
}



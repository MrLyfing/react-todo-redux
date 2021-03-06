/**
 * Created by Lyfing on 15/10/2016.
 */

import React from 'react'

import AddTodo from '../containers/Addtodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'

export default class App extends React.Component {
    render() {
        const { filter } = this.props.params; //get from react router
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="text-center">ReactJS Todo Redux App <span style={{fontSize: '15px'}}>by Lyfing</span></h1>
                    </div>
                </div>

                <div class="row" style={{marginTop: '15px'}}>
                    <div class="col-md-6 col-md-offset-3">
                        <AddTodo />
                        <Footer />
                        <VisibleTodoList /> {/* If null return 'all' */}
                    </div>
                </div>
            </div>
        )
    }
}

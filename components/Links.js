/**
 * Created by Lyfing on 09/11/2016.
 */


import React from 'react';
import FilterLink from '../containers/FilterLink'

export default class Links extends React.Component {
    render() {
        return (
            <div class="row" style={{margin: '20px 0'}}>
                <div class="col-md-4">
                    <FilterLink filter="SHOW_ALL">All</FilterLink>
                </div>
                <div class="col-md-4">
                    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
                </div>
                <div class="col-md-4">
                    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
                </div>
            </div>
        )
    }
}

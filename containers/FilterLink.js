/**
 * Created by Lyfing on 08/11/2016.
 */


import React from 'react';
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/visibilityFilter'

class FilterLink extends React.Component {
    onClickSetVisibilityFilter() {
        let {filter, visibilityFilter} = this.props;
        if (filter !== visibilityFilter)
            this.props.setVisibilityFilter(filter);
    }

    render() {
        console.log('FILTER LINK PROPS :', this.props);
        let linkStyle = {
            fontSize: '20px',
            cursor: 'pointer'
        };
        let {filter, visibilityFilter} = this.props;

        if (filter === visibilityFilter) {
            linkStyle['fontWeight'] = '700';
            linkStyle['fontSize'] = '25px';
        }

        return (
            <div class="text-center">
                <a style={linkStyle} onClick={this.onClickSetVisibilityFilter.bind(this)}>
                    {this.props.children}
                </a>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        visibilityFilter: state.visibilityFilter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setVisibilityFilter: (filter) => {
            dispatch(setVisibilityFilter(filter))
        }
    }
};

FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps)
(FilterLink);

export default FilterLink





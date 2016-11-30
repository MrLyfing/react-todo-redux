/**
 * Created by Lyfing on 08/11/2016.
 */


import React from 'react';
import { Link } from 'react-router';

class FilterLink extends React.Component {

    render() {
        console.log('FILTER LINK PROPS :', this.props);
        let { filter } = this.props;
        return (
            <div class="text-center">
                <Link
                    to={filter === 'all' ? '' : filter}
                    style={{ fontSize: '20px' }}
                    activeStyle={{
                        fontWeight: '700',
                        fontSize: '25px'
                    }}>
                    {this.props.children}
                </Link>
            </div>
        )
    }
}

export default FilterLink





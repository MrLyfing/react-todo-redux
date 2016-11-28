/**
 * Created by Lyfing on 08/11/2016.
 */

import _ from 'underscore'

/* Filter : ['SHOW_ALL', 'SHOW_ACTIVE', 'SHOW_COMPLETED'] */

const visibilityFilter = (state = 'SHOW_ALL', action) => {

    switch(action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.payload.filter;

        default:
            return state;
    }
};

export default visibilityFilter;

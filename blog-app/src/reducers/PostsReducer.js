import {FETCH_POSTS_TYPE, FETCH_POST} from '../actions/index.js'
import _ from 'lodash'

export default function reduceFetchPosts(state = {}, action) {
    switch(action.type) {
        case FETCH_POSTS_TYPE :
            const data = _.mapKeys(action.payload.data, 'id');
            return data;

        case FETCH_POST:
            const post = action.payload.data;
            const newState = {...state};
            newState[post.id] = post;

            return newState;
    }

    return state;
}
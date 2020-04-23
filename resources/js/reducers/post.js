import { GET_POSTS, ADD_POST, POST_ERROR, DELETE_POST } from "../actions/types";

const initialState = {
    posts: [],
    post: null,
    loading: true,
    error: {}
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_POSTS:
            return {
                ...state,
                posts: payload,
                loading: false
            };
        case ADD_POST:
            return {
                ...state,
                posts: [payload, ...state.posts],
                loading: false
            };
        case POST_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== payload),
                loading: false
            };
        default:
            return state;
    }
}

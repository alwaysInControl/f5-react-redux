import axios from "axios";

const initialState = {
    posts: [],
    comments: [],
    visibleComments: {}
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_POSTS':
            return {...state, posts: action.payload}
        case 'GET_COMMENTS':
            return {...state, comments: action.payload}
        case 'TOGGLE_COMMENTS':
            return {...state,
                visibleComments: {
                    ...state.visibleComments,
                    [action.payload]: !state.visibleComments[action.payload]
                }
            }
        default:
            return state
    }
}

export const fetchPosts = () => {
    return (dispatch) => {
        axios.get('https://dummyjson.com/posts?limit=10')
            .then(response => dispatch({
                type: 'GET_POSTS',
                payload: response.data.posts
            }))
    }
}

export const fetchCommentsByPostId = (postId) => {
	return (dispatch) => {
        axios.get(`https://dummyjson.com/comments/post/${postId}`)
            .then(response => dispatch({
                type: 'GET_COMMENTS',
                payload: response.data.comments
            }))
	}
}

export const toggleComments = (postId) => {
    return {
        type: 'TOGGLE_COMMENTS',
        payload: postId
    };
}
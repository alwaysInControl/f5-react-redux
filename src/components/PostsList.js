import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCommentsByPostId, fetchPosts, toggleComments } from "../store/postsReducer";

const PostsList = () => {
    const posts = useSelector(state => state.posts.posts);
    const comments = useSelector(state => state.posts.comments);
    const visibleComments = useSelector(state => state.posts.visibleComments);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    const handleCommentClick = (postId) => {
        dispatch(fetchCommentsByPostId(postId));
        dispatch(toggleComments(postId));
    }

    return (
        <div>
            <h2>Posts List:</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        {post.title}
                        <button onClick={() => handleCommentClick(post.id)}>
                            {visibleComments[post.id] ? 'Hide comment' : 'Show comment'}
                        </button>
                        {visibleComments[post.id] && (
                            <ul>
                                {comments.map(comment => (
                                    comment.postId === post.id && (
                                        <li key={comment.postId}>{comment.body}</li>
                                    )
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PostsList;
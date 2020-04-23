import React, { Fragment, useEffect } from "react";
import PostItem from "./PostItem";
import { connect } from "react-redux";
import { getPosts } from "../../actions/post";
import PropTypes from "prop-types";

const Posts = ({ getPosts, post: { posts, loading } }) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);

    return loading ? (
        <div className="progress">
            <div className="indeterminate"></div>
        </div>
    ) : (
        <Fragment>
            <div className="collection mx-3">
                <a href="#!" className="collection-item active">
                    Total Posts: {posts.length}
                </a>
            </div>
            {posts.map(post => (
                <PostItem key={post.id} post={post} />
            ))}
        </Fragment>
    );
};

const mapStateToProps = state => ({
    post: state.post
});

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { getPosts })(Posts);

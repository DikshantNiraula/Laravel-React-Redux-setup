import React, { Fragment } from "react";
import { deletePost } from "../../actions/post";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PostItem = ({ post: { id, name, title }, deletePost }) => {
    return (
        <Fragment>
            <div>
                <ul className="collection mx-3">
                    <li className="collection-item avatar">
                        <i className="material-icons circle">person_outline</i>
                        <span className="title">{name}</span>
                        <p>{title}</p>
                        <a
                            className="secondary-content waves-effect waves-light  red darken-3 btn"
                            onClick={() => deletePost(id)}
                        >
                            <i className="material-icons left">
                                delete_forever
                            </i>
                            Delete
                        </a>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
};

PostItem.propTypes = {
    deletePost: PropTypes.func.isRequired
};

export default connect(null, { deletePost })(PostItem);

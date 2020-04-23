import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
import AddPost from "./AddPost";
import Posts from "./posts/Posts";
import Navbar from "./layouts/Navbar";
import { Provider } from "react-redux";
import store from "../store";
import { getPosts } from "../actions/post";
const App = () => {
    useEffect(() => {
        store.dispatch(getPosts());
    }, []);
    return (
        <Provider store={store}>
            <Fragment>
                <Navbar />
                <div className="container my-4">
                    <AddPost />
                    <Posts />
                </div>
            </Fragment>
        </Provider>
    );
};

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}

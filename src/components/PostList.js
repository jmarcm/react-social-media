import React from "react";
import Post from "./Post";

function PostList({ posts }) {
    return posts.map((post, index) => <Post key={index} post={post} />);
}

export default PostList;

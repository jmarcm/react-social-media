import React from "react";

function PostList({ posts }) {
    return posts.map((post, index) => {
        return (
            <React.Fragment key={index}>
                {post.image && (
                    <img
                        src={URL.createObjectURL(post.image)}
                        alt=""
                        style={{
                            width: 200,
                            height: 100,
                            objectFit: "cover",
                        }}
                    />
                )}
                <p>{post.content}</p>
                <p>{post.user}</p>
            </React.Fragment>
        );
    });
}

export default PostList;

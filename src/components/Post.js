import React from "react";

function Post({ post }) {
    return (
        <>
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
        </>
    );
}

export default Post;

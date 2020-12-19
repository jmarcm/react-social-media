import React from "react";

function Post({ image, content, user }) {
    return (
        <>
            {image && (
                <img
                    src={URL.createObjectURL(image)}
                    alt=""
                    style={{
                        width: 200,
                        height: 100,
                        objectFit: "cover",
                    }}
                />
            )}
            <p>{content}</p>
            <p>{user}</p>
        </>
    );
}

export default Post;

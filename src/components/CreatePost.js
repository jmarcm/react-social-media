import React from "react";

function CreatePost({ user, posts, setPosts }) {
    const [content, setContent] = React.useState("");
    const [image, setImage] = React.useState(null);

    function handleSubmitClick(event) {
        event.preventDefault();
        const post = { user, content, image };
        let newPosts = [post, ...posts];
        console.log(newPosts);
        setPosts(newPosts);
    }

    return (
        <div>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmitClick}>
                <input
                    type="text"
                    onChange={(event) => setContent(event.target.value)}
                    placeholder="Add Post Content"
                />
                <input
                    type="file"
                    onChange={(event) => setImage(event.target.files[0])}
                />
                <button type="submit">Submit Post</button>
            </form>
            <div id="answer">
                <p>{content}</p>
                {image && (
                    <img
                        src={URL.createObjectURL(image)}
                        style={{ height: 100, width: 200, objectFit: "cover" }}
                        alt=""
                    />
                )}
            </div>
        </div>
    );
}

export default CreatePost;

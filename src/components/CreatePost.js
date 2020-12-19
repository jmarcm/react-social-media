import React from "react";

function CreatePost({ user, posts, setPosts }) {
    const [content, setContent] = React.useState("");
    const [image, setImage] = React.useState(null);
    const imageInputRef = React.useRef();

    function handleSubmitClick(event) {
        event.preventDefault();
        const post = { user, content, image };
        let newPosts = [post, ...posts];

        // update posts in app
        setPosts(newPosts);

        // Clear inputs
        setContent("");
        setImage(null);
        imageInputRef.current.value = "";
    }

    return (
        <div>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmitClick}>
                <input
                    type="text"
                    onChange={(event) => setContent(event.target.value)}
                    placeholder="Add Post Content"
                    value={content}
                />
                <input
                    type="file"
                    onChange={(event) => setImage(event.target.files[0])}
                    ref={imageInputRef}
                />
                <button type="submit">Submit Post</button>
            </form>
            <div
                id="answer"
                style={{
                    width: 300,
                    borderBottom: "3px dotted lightblue",
                    marginBottom: "1.3em",
                    paddingBottom: "0.4em",
                }}
            >
                <p>{content}</p>
                {image ? (
                    <img
                        src={URL.createObjectURL(image)}
                        style={{ height: 100, width: 200, objectFit: "cover" }}
                        alt=""
                    />
                ) : (
                    <span className="no-image"></span>
                )}
                {/* <div>++++++++++++++++++++</div> */}
            </div>
        </div>
    );
}

export default CreatePost;

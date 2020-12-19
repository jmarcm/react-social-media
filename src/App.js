import React from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import CreatePost from "./components/CreatePost";

function App() {
    const [user, setUser] = React.useState("jm");
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        document.title = user ? `${user}'s feed` : "Please login";
    }, [user]);

    if (!user) {
        return <Login setUser={setUser} />;
    }

    return (
        <>
            <Header user={user} setUser={setUser} />
            <CreatePost user={user} posts={posts} setPosts={setPosts} />
            <div>++++++++++++++++++++</div>
            {posts.map((post, index) => {
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
            })}
        </>
    );
}

export default App;

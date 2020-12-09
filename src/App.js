import React from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import CreatePost from "./components/CreatePost";

function App() {
    const [user, setUser] = React.useState("jm");

    React.useEffect(() => {
        document.title = user ? `${user}'s feed` : "Please login";
    }, [user]);

    if (!user) {
        return <Login setUser={setUser} />;
    }

    return (
        <>
            <Header user={user} setUser={setUser} />
            <CreatePost />
        </>
    );
}

export default App;

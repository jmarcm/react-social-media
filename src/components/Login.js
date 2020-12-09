import React from "react";

function Login({ setUser }) {
    const [username, setUsername] = React.useState("");

    function handleSubmit(event) {
        event.preventDefault();
        setUser(username);
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="Username"
                />
                <button type="submit">Submit</button>
            </form>
            <p>{username}</p>
        </div>
    );
}

export default Login;

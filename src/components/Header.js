/**
 * To greed the user when he log in
 */

import React from "react";

function Header({ user, setUser }) {
    return (
        <>
            <span>Welcome {user}!</span>
            <button onClick={() => setUser("")}>Logout</button>
        </>
    );
}

export default Header;

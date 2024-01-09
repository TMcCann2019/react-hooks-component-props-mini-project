// import React from "react";

function Header (blogData) {
    const { name, image, about } = blogData;

    return (
        <header>
            <h1>{name}</h1>
        </header>
    )
}

export default Header;
// import React from "react";

function About (blogData) {
    const { name, image="https://via.placeholder.com/215", about } = blogData;
    return (
        <aside>
            <img src={image} alt="blog logo"></img>
            <p>{about}</p>
        </aside>
    )
}

export default About;
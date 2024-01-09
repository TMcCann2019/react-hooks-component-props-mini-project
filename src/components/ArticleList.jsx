import React from "react";
import Article from "./Article"

function ArticleList (props) {
    const { posts } = props;

    return (
        <main>
            {posts.map((post) => {
                return <Article key={post.id} title={post.title} date={post.date} preview={post.preview}></Article>
            })}
        </main>
    )
}

export default ArticleList;
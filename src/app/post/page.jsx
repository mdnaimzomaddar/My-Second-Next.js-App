import React from 'react';
import Post from "../components/Post"

const PostPage = async() => {

    const ref = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await ref.json()
    return (
        <div>
            <h2>Post area {posts.length}</h2>
            <div className='grid grid-cols-3 gap-4'>
                {posts.map(post => <Post key={post.id} post={post}></Post>)}
            </div>
        </div>
    );
};

export default PostPage;
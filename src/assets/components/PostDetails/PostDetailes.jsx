import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetailes = () => {

    const post = useLoaderData();
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1)

    }

    
    return (
        <div className='p-10 space-y-4'>
            <h1 className='text-4xl font-bold'>Post: {post.id}</h1>
            <p className='text-2xl font-bold'>{post.title}</p>
            <p className='text-gray-600'>{post.body}</p>
            <button onClick={handleGoBack} className='p-4 bg-gray-300 rounded-2xl text-purple-500'>Go back</button>
        </div>
    );
};

export default PostDetailes;
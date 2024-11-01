/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {title, body, id} = post;
    return (
        <div className='shadow-xl p-6 flex flex-col gap-6'>
            <h1 className='text-2xl font-bold flex-grow'>{title}</h1>
            {/* <p className='text-gray-600 flex-grow'>{body}</p> */}
            <Link to={`/post/${id}`} >
                <button className='p-4 bg-gray-300 rounded-2xl text-purple-500'>Show Details</button>
            </Link>
            
        </div>
    );
};

export default Post;
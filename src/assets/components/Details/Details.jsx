import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Details = () => {
    const user = useLoaderData();
    const {username, name } = user;
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/users")
    }
    return (
        <div>
            <p>{name}</p>
            <p>username: {username}</p>
            <button onClick={handleNavigate} className='p-4 bg-gray-300 rounded-2xl text-purple-500'>Go Back</button>
            
        </div>
    );
};

export default Details;
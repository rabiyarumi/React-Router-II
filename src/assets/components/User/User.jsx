/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const User = ({user}) => {

    const {id, name, email, phone, username, website} = user;
    return (
        <div>
            <div className="shadow-xl p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-2">{name}</h2>
                <p>Username: {username}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p className="mb-8">Website: {website}</p>
                <Link to={`/user/${id}`} className=" p-4 bg-gray-300 rounded-2xl text-purple-500">Show Details</Link>
                
                
            </div>
        </div>
    );
};

export default User;
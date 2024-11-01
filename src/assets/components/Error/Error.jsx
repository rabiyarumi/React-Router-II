import { Link, useRouteError } from "react-router-dom";

const Error = () => {

    const error = useRouteError();
    console.log(error)

    return (
        <div className="flex flex-col items-center justify-center gap-8 mt-20">
            <h1 className='text-6xl font-bold text-center'>Oops!</h1>
            {/* <p className="text-4xl font-bold text-center">{error.status}</p> */}
            <p className="text-center">{error.statusText || error.message}</p>

             {
                error.status === 404 && <div>
                    <h2 className="text-center">page not found</h2>
                    <p className="text-center">Go back to home</p>
                    <Link to="/"><button className="p-4 bg-gray-300 rounded-2xl text-purple-500">Home</button></Link>
                </div>
             }
            {/* <p>{error.error.message}</p> */}
        </div>
    );
};

export default Error;
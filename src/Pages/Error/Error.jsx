import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="bg-white">
            <div className="flex justify-center relative">
                <h1 className="absolute top-12 md:top-20 text-4xl md:text-8xl font-semibold">
                    404
                </h1>
                <img
                    src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
                    alt=""
                />
                <h3 className="text-center absolute bottom-14 md:bottom-28 text-2xl md:text-3xl font-semibold">
                    Look like you are lost
                </h3>
                <p className="absolute bottom-8 md:bottom-20">
                    the page you are looking for not available!
                </p>
                <Link to="/" className="absolute -bottom-4 md:bottom-7">
                    <button className="text-white text-sm md:text-base bg-green-400 rounded-md py-2 px-4 hover:text-lg duration-200">
                        Go to Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Error;
import { Link } from "react-router-dom";
import banner from "../../../assets/weight-training-gyms-near-me-harmar-township.jpg";
const Banner = () => {
    return (
        <div>
            <div
                className="h-[60vh] md:h-[75vh] "
                style={{
                    backgroundImage: `url(${banner})`,
                }}
            >
                <div className="hero-overlay bg-opacity-60 py-5 pl-5 md:px-10 md:py-10 lg:pt-20 lg:pl-20">
                    <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
                        Exercise is essential to <br /> keep the body and mind
                        healthy
                    </h2>
                    <h6 className="text-white text-sm lg:text-xl mt-1 md:mt-2 lg:mt-5">
                        Choose from hundreds of workouts, healthy <br />{" "}
                        recipes, relaxing meditations, and expert <br />{" "}
                        articles, for a whole body and mind <br /> approach to
                        feeling great.
                    </h6>
                    <Link to="/gallery">
                        <button className="text-white lg:text-lg font-medium mt-2 md:mt-2 lg:mt-7 border rounded hover:bg-white hover:text-black duration-300 px-3 py-1 md:px-4 md:py-1 lg:px-7 lg:py-2">
                            JOIN NOW
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;

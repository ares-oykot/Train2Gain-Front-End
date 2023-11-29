import personal from "../../../assets/Featured/sports.png";
import exclusive from "../../../assets/Featured/fitness.png";
import zumba from "../../../assets/Featured/zumba.png";
import yoga from "../../../assets/Featured/yoga-pose.png";
import sauna from "../../../assets/Featured/bucket.png";
import open from "../../../assets/Featured/open-24-hours.png";
const Featured = () => {
    return (
        <div className="my-4     md:my-8">
            <h2 className="text-center text-4xl font-bold mb-4 md:mb-8 text-stone-600">Our Featured</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 text-center">
                <div className=" bg-sky-100 hover:bg-sky-200 duration-300 cursor-pointer">
                    <div className="py-8 md:py-16">
                        <img
                            className="w-14 md:w-20 mx-auto"
                            src={personal}
                            alt=""
                        />
                        <p className="md:text-xl font-medium">Personal</p>
                    </div>
                </div>
                <div className=" bg-sky-100 hover:bg-sky-200 duration-300 cursor-pointer">
                    <div className="py-8 md:py-16">
                        <img
                            className="w-14 md:w-20 mx-auto"
                            src={exclusive}
                            alt=""
                        />
                        <p className="md:text-xl font-medium">Exclusive</p>
                    </div>
                </div>
                <div className=" bg-sky-100 hover:bg-sky-200 duration-300 cursor-pointer">
                    <div className="py-8 md:py-16">
                        <img
                            className="w-14 md:w-20 mx-auto"
                            src={zumba}
                            alt=""
                        />
                        <p className="md:text-xl font-medium">Zumba</p>
                    </div>
                </div>
                <div className=" bg-sky-100 hover:bg-sky-200 duration-300 cursor-pointer">
                    <div className="py-8 md:py-16">
                        <img
                            className="w-14 md:w-20 mx-auto"
                            src={yoga}
                            alt=""
                        />
                        <p className="md:text-xl font-medium">Yoga</p>
                    </div>
                </div>
                <div className=" bg-sky-100 hover:bg-sky-200 duration-300 cursor-pointer">
                    <div className="py-8 md:py-16">
                        <img
                            className="w-14 md:w-20 mx-auto"
                            src={sauna}
                            alt=""
                        />
                        <p className="md:text-xl font-medium">Sauna</p>
                    </div>
                </div>
                <div className=" bg-sky-100 hover:bg-sky-200 duration-300 cursor-pointer">
                    <div className="py-8 md:py-16">
                        <img
                            className="w-14 md:w-20 mx-auto"
                            src={open}
                            alt=""
                        />
                        <p className="md:text-xl font-medium">Open 24/7</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;

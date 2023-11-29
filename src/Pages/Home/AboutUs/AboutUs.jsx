import img1 from "../../../assets/About/man-1868632_1280.jpg";
import img2 from "../../../assets/About/blur-1972569_640.jpg";
import img3 from "../../../assets/About/girl-3253532_640.jpg";
const AboutUs = () => {
    return (
        <div className="flex flex-col md:flex-row gap-6 lg:gap-16 md:px-10 md:py-10 lg:px-20 lg:py-20 bg-indigo-300">
            <div className="px-3 py-3 order-2 md:order-1 flex w-full gap-3 md:gap-3 lg:gap-5 md:h-auto lg:h-[500px] md:p-3 lg:p-5 md:rounded-xl lg:rounded-2xl bg-indigo-200">
                <div className="w-1/2 flex flex-col md:gap-3 gap-3 lg:gap-5">
                    <div className="h-1/2">
                        <img
                            className="w-full rounded-lg md:rounded-xl lg:rounded-2xl h-full"
                            src={img2}
                            alt=""
                        />
                    </div>
                    <div className="h-1/2">
                        <img
                            className="w-full rounded-lg md:rounded-xl lg:rounded-2xl h-full"
                            src={img3}
                            alt=""
                        />
                    </div>
                </div>
                <div className="w-1/2 h-full">
                    <img
                        className="h-[272px] rounded-lg md:h-full md:rounded-xl lg:rounded-2xl w-full"
                        src={img1}
                        alt=""
                    />
                </div>
            </div>
            <div className="order-1 md:order-2 w-full flex items-center">
                <div className="">
                    <h2 className=" text-3xl text-center pt-5 md:text-left md:text-3xl lg:text-5xl font-black">
                        About Us
                    </h2>
                    <h4 className="text-center md:text-left mt-2 lg:text-xl lg:mt-5">
                        From the moment you walk through the door you know
                        Gymbase is a unique place.
                    </h4>
                    <h6 className="text-center md:text-left mt-2 text-xs md:text-sm lg:text-base md:mt-2 lg:mt-3">
                        When we created the gym base, we knew we wanted to be
                        more than just a simple gym. Having worked in
                        traditional, gyms in the past. We knew we needed to
                        create a concept that would provide our members with the
                        most effective tools for success. This meant we needed
                        to offer a wide range of classes for both children and
                        adults.
                    </h6>
                    <div className="mt-5 text-sm md:text-base flex md:mt-3 lg:mt-8 bg-indigo-200 py-3 lg:py-6 justify-around rounded-xl lg:rounded-2xl">
                        <span>
                            ENVIRONMENT <br />
                            <span className="text-sm md:text-lg font-semibold">
                                Clean and Airy
                            </span>
                        </span>
                        <span>
                            CLASSES <br />
                            <span className="text-sm md:text-lg font-semibold">
                                Every Level
                            </span>
                        </span>
                        <span>
                            PRICES <br />
                            <span className="text-sm md:text-lg font-semibold">
                                Affordable
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

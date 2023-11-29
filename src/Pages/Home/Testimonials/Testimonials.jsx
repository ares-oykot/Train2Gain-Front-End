import quote1 from "../../../assets/testimonials/editing(1).png";
import quote2 from "../../../assets/testimonials/editing.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const Testimonials = () => {
    const axiosPublic = useAxiosPublic();
    const { data: testimonials = [] } = useQuery({
        queryKey: ["menu"],
        queryFn: async () => {
            const res = await axiosPublic.get("/testimonials");
            return res.data;
        },
    });
    return (
        <div className="">
            <h2 className="text-4xl text-center font-semibold mt-5">
                Testimonials or Success
            </h2>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 1,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={false}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {testimonials?.map((testimonial) => (
                    <SwiperSlide key={testimonial._id}>
                        <div className="flex justify-center py-5">
                            <div className="w-[650px] h-72 border bg-sky-100 p-5 md:py-8 md:px-14">
                                <span>
                                    <img
                                        className="w-8 inline-block"
                                        src={quote1}
                                        alt=""
                                    />
                                    <span>{testimonial.details}</span>
                                    <img
                                        className="w-8 inline-block"
                                        src={quote2}
                                        alt=""
                                    />
                                </span>
                                <hr className="my-5" />
                                <div className="flex justify-between">
                                    <div className="flex gap-4">
                                        <img
                                            className="w-14 h-14 rounded-md"
                                            src={testimonial.img}
                                            alt=""
                                        />
                                        <div className="">
                                            <h5 className="text-lg font-medium">{testimonial.name}</h5>
                                            <p>{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <Rating
                                            style={{ maxWidth: 80 }}
                                            value={testimonial.rating}
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonials;

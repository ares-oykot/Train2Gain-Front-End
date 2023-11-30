import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
const Gallery = () => {
    const axiosPublic = useAxiosPublic();
    const { data: gallery = [] } = useQuery({
        queryKey: ["gallery"],
        queryFn: async () => {
            const res = await axiosPublic.get("/gallery");
            return res.data;
        },
    });
    return (
        <div className="max-w-screen-xl mx-auto">
            <div
                className="hero h-[40vh] rounded-lg"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co/nCHphTH/gallery-Thumb.png)",
                }}
            >
                <div className="hero-overlay bg-opacity-30 rounded-lg"></div>
                <div className="hero-content text-center text-neutral-content">
                    <h1 className="text-7xl font-black text-white">
                        OUR GALLERY
                    </h1>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-4 rounded-md">
                {gallery?.map((img) => (
                    <div
                        className="hover:shadow-xl duration-300"
                        key={img?._id}
                    >
                        <img
                            className="rounded-md h-full"
                            src={img?.image}
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;

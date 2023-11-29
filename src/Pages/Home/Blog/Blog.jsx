import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const Blog = () => {
    const axiosPublic = useAxiosPublic();
    const { data: blog = [] } = useQuery({
        queryKey: ["latestBlog"],
        queryFn: async () => {
            const res = await axiosPublic.get("/latest-blog");
            return res.data;
        },
    });
    const { heading, subHeading, img, uploadDate } = blog;
    return (
        <div className="mt-5">
            <h1 className="text-5xl font-semibold">Latest Blog</h1>
            <div className="mt-5 flex flex-col md:flex-row gap-4">
                <img className="md:w-[400px] lg:w-[600px] rounded-xl" src={img} alt="" />
                <div className="">
                    <p className="text-2xl lg:text-3xl font-semibold">{heading}</p>
                    <p className="text-xl lg:text-3xl mt-2">{subHeading}</p>
                    <p className="lg:text-xl mt-2">Date: {uploadDate}</p>
                    <p className="md:text-2xl mt-2 text-blue-500">
                        <Link>Read More...</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
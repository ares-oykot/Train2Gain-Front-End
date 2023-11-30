import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import likee from "../../../assets/ico/thumb-up.png";
import disLike from "../../../assets/ico/thumb-down.png";

const Blog = () => {
    const axiosPublic = useAxiosPublic();
    const { data: blog = [], refetch } = useQuery({
        queryKey: ["latestBlog"],
        queryFn: async () => {
            const res = await axiosPublic.get("/latest-blog");
            return res.data;
        },
    });
    const {
        heading,
        subHeading,
        thumbNail,
        uploadDate,
        like,
        unLike,
        role,
        _id,
    } = blog;
    const handleLike = (id, count) => {
        const updateLike = parseInt(like) + parseInt(count);
        if (updateLike > like) {
            axiosPublic
                .put(`/likeBlog/${id}`, { like: updateLike })
                .then((res) => {
                    if (res.data.modifiedCount > 0) {
                        refetch();
                    }
                });
        }
    };
    const handleDisLike = (id, count) => {
        const updateLike = parseInt(unLike) + parseInt(count);
        if (updateLike > unLike) {
            axiosPublic
                .put(`/disLikeBlog/${id}`, { unLike: updateLike })
                .then((res) => {
                    if (res.data.modifiedCount > 0) {
                        refetch();
                    }
                });
        }
    };
    return (
        <div className="mt-5">
            <h1 className="text-5xl font-semibold">Latest Blog</h1>
            <div className="mt-5 flex flex-col md:flex-row gap-4">
                <img
                    className="md:w-[400px] lg:w-[600px] rounded-xl"
                    src={thumbNail}
                    alt="thumbnail"
                />
                <div className="">
                    <p className="text-2xl lg:text-3xl font-semibold">
                        {heading}
                    </p>
                    <p className="text-xl lg:text-3xl mt-2">{subHeading}</p>
                    <p className="lg:text-xl mt-2">Date: {uploadDate}</p>
                    <p className="md:text-2xl mt-2 text-blue-500">
                        <Link to="/community">Read More...</Link>
                    </p>
                    <div className="flex gap-2 mt-5">
                        <button className="btn btn-xs btn-success text-white disabled rounded-sm">
                            {role === "admin" ? "Admin" : ""}
                        </button>
                        <span
                            onClick={() => handleLike(_id, 1)}
                            className="btn btn-xs btn-outline btn-success rounded"
                        >
                            <img className="w-5" src={likee} alt="" /> {like}
                        </span>
                        <span
                            onClick={() => handleDisLike(_id, 1)}
                            className="btn btn-xs btn-outline btn-error rounded"
                        >
                            <img className="w-5" src={disLike} alt="" />{" "}
                            {unLike}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;

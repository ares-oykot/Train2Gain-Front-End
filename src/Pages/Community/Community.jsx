import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import Post from "./Post";

const Community = () => {
    const axiosPublic = useAxiosPublic();
    const { data: blogs = [], refetch } = useQuery({
        queryKey: ["blog"],
        queryFn: async () => {
            const res = await axiosPublic.get("/blog");
            return res.data;
        },
    });
    
    return (
        <div className="max-w-screen-xl mx-auto">
            <SectionTitle heading="Community Post"></SectionTitle>
            {blogs?.map((blog) => (
                <Post key={blog?._id} blogs={blog} refetch={refetch}></Post>
            ))}
        </div>
    );
};

export default Community;
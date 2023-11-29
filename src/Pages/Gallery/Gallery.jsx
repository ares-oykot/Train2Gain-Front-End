import InfiniteScroll from "react-infinite-scroll-component";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const Gallery = () => {
    const axiosPublic = useAxiosPublic();
    const { data: gallery = [] } = useQuery({
        queryKey: ["gallery"],
        queryFn: async () => {
            const res = await axiosPublic.get("/gallery");
            return res.data;
        },
    });
    const fetchMoreData = () => {
        setTimeout(() => {
            setDataSource(dataSource.concat(Array.from({length:2})))
        }, 500)
    }
    return (
        <div>
            <InfiniteScroll dataLength={gallery.length} next={fetchMoreData}>
                {gallery?.map((item, idx) => {
                    return <div key={idx}>This is gallery no {idx + 1}</div>;
                })}
            </InfiniteScroll>
        </div>
    );
};

export default Gallery;

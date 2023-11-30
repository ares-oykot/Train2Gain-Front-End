import Team from "../../Team/Team";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Featured from "../Featured/Featured";
import Newsletter from "../Newsletter/Newsletter";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto mb-20">
            <Banner></Banner>
            <Featured></Featured>
            <AboutUs></AboutUs>
            <Testimonials></Testimonials>
            <Blog></Blog>
            <Newsletter></Newsletter>
            <Team></Team>
        </div>
    );
};

export default Home;
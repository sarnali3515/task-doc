import Navbar from "../Navbar/Navbar";
import Banner from "./Banner";
import Bottom from "./Bottom";
import Faq from "./Faq";
import Mission from "./Mission";
import Service from "./Service";
import Statistics from "./Statistics";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div className="bg-[#FBFBFB]">
            <div className="bg-gradient-to-bottom bg-left-to-right">
                <Navbar></Navbar>
                <Banner></Banner>
                <Statistics></Statistics>
            </div>
            <div className="max-w-7xl mx-auto ">
                <Mission></Mission>
                <Service></Service>
                <Testimonial></Testimonial>
                <Faq></Faq>
                <Bottom></Bottom>
            </div>

        </div>
    );
};

export default Home;
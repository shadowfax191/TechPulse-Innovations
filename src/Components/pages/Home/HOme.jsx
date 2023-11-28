
import Services from "./Services";
import Slider from "./Slider";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div className="min-h-screen " >
            <Slider></Slider>
            <div className="mx-auto max-w-screen-2xl px-4 py-2 space-y-10 pb-10">
            <Services></Services>
            <Testimonials></Testimonials>
            </div>
            
        </div>
    );
};

export default Home;
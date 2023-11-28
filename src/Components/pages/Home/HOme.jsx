
import Services from "./Services";
import Slider from "./Slider";


const Home = () => {
    return (
        <div className="min-h-screen" >
            <Slider></Slider>
            <div className="mx-auto max-w-screen-2xl px-4 py-2 space-y-10">
            <Services></Services>
            </div>
            
        </div>
    );
};

export default Home;
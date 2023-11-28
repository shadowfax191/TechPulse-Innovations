
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  return (

    <div className=''>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >

        <SwiperSlide className=''>

          <div className="bg-cover  bg-center    min-h-[80vh] text-white py-24 px-10 object-fill" style={{ backgroundImage: 'url(https://i.ibb.co/gSHC5kR/Web-150-DPI-20190927-10th-Floor-Conference-Room-2-v1.jpg)', }}>
            <div className='absolute top-0 left-0 w-full h-full bg-blue-gray-300 opacity-50'></div>
            <div className="mx-auto text-center text-black justify-center mt-20  bg-transparent relative z-10 ">
              <p className="font-bold text-5xl uppercase">Welcome to</p>
              <p className="text-3xl font-bold">TechPulse Innovations</p>
              <p className="text-2xl my-8 leading-none">TechPulse: Where Ideas Pulse into Innovation</p>
              <a href="#" className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Contact us</a>
            </div>


          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className="bg-cover bg-center  min-h-[80vh] text-white py-24 px-10 object-fill" style={{ backgroundImage: 'url(https://i.ibb.co/L5kk52H/getty-504987926-340268.jpg)' }}>
            <div className='absolute top-0 left-0 w-full h-full bg-blue-gray-300 opacity-50'></div>
            <div className='absolute top-0 left-0 w-full h-full bg-blue-gray-300 opacity-50'></div>

            <div className="mx-auto text-center text-black justify-center mt-20 max-w-3xl  bg-transparent relative z-10 ">
              <p className="font-bold text-5xl uppercase">About TechPulse Innovations</p>
              {/* <p className="text-2xl my-8 leading-none">At TechPulse Innovations, we don't just follow trends; we set them. Our passion for technology and innovation drives us to create solutions that redefine the digital landscape. Here's a glimpse into what makes us a cutting-edge force in the tech industry.</p> */}
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide className=''>

          <div className="bg-cover bg-center  min-h-[80vh] text-white py-24 px-10 object-fill" style={{ backgroundImage: 'url(https://i.ibb.co/x5MbtvR/getty-504572294-135756.jpg)' }}>
            <div className='absolute top-0 left-0 w-full h-full bg-blue-gray-300 opacity-50'></div>

            <div className="mx-auto text-center text-black justify-center mt-20 max-w-3xl bg-transparent relative z-10 ">
            <p className="font-bold text-5xl uppercase">Our Mission</p>
              <p className="text-2xl my-8 leading-none">TechPulse Innovations is on a mission to transform businesses through technology. We strive to empower organizations with innovative solutions that enhance efficiency, elevate user experiences, and pave the way for sustained success.</p>
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>

          <div className="bg-cover bg-center  min-h-[80vh] text-white py-24 px-10 object-fill" style={{ backgroundImage: 'url(https://i.ibb.co/2hVcyyG/Is-ROWE-Right-for-Your-Company.jpg)' }}>
            <div className='absolute top-0 left-0 w-full h-full bg-blue-gray-300 opacity-50'></div>

            <div className="mx-auto text-center text-black justify-center mt-20 max-w-lg bg-transparent relative z-10 ">
              <p className="text-2xl mb-8 leading-none">Enjoy your stay with TechPulse Innovations, where every moment is a celebration of technology, creativity, and boundless innovation.</p>
              <a href="#" className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Get Started</a>
            </div>
          </div>
        </SwiperSlide>



      </Swiper>
    </div>
  );
};

export default Slider;
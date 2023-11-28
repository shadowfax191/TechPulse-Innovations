
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
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >

        <SwiperSlide className=''><div>
        <img className='w-screen h-full  ' src="https://i.ibb.co/gSHC5kR/Web-150-DPI-20190927-10th-Floor-Conference-Room-2-v1.jpg" alt="" />
        <h1 className='absolute'>gfgdfgdgfddddddddddddddddddddddddddd </h1>
        
        </div>
        </SwiperSlide>
        <SwiperSlide className=''><img className='w-screen h-full  ' src="https://i.ibb.co/L5kk52H/getty-504987926-340268.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className=''><img className='w-screen h-full  ' src="https://i.ibb.co/x5MbtvR/getty-504572294-135756.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className=''><img className='w-screen h-full ' src="https://i.ibb.co/2hVcyyG/Is-ROWE-Right-for-Your-Company.jpg" alt="" /></SwiperSlide>



      </Swiper>
    </div>
  );
};

export default Slider;
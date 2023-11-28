
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { AccountCircle, VerifiedUser } from '@mui/icons-material';

const Testimonials = () => {

    const [tesData, setData] = useState([])

    useEffect(() => {
        fetch('testimonial.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    console.log(tesData);
    return (
        <div>
            <h1 className='text-center text-3xl md:text-5xl font-bold my-4 md:my-8'>Testimonials</h1>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 3 }
                    }}
                >
                    {
                        tesData.map((tes, index) =>
                            <SwiperSlide key={index}><div>
                                <section className="bg-white dark:bg-gray-900">
                                    <div className=" px-4 py-8 mx-auto  text-center">
                                        <div className="mr-auto place-self-center lg:col-span-7">
                                            <p className="max-w-2xl text-gray-700 mb-3 "> <AccountCircle className="h-6 w-6"></AccountCircle>  </p>
                                            <h1 className="max-w-2xl flex items-center justify-center gap-2 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-3xl dark:text-white">{tes.name} <VerifiedUser></VerifiedUser></h1>

                                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{tes.date}</p>
                                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{tes.comment}</p>


                                        </div>
                                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                                        </div>
                                    </div>
                                </section>
                            </div></SwiperSlide>
                        )
                    }


                </Swiper>
            </div>

        </div >
    );
};

export default Testimonials;
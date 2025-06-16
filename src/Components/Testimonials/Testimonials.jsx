import React from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, A11y } from 'swiper/modules';


const Testimonials = () => {
    return (
        <div className='testimonials-section' id='testimonials'>
            <div className="testimonials-container">
                <div className="testimonials-title">
                    <h2>Real Stories <br />Real <span>Impact</span></h2>
                    <p>Here's what some of our Clients say:</p>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                        0: {
                            slidesPerView: 1
                        },
                        768: {
                            slidesPerView: 2
                        },
                        1024: {
                            slidesPerView: 3
                        }
                    }}

                >
                    <SwiperSlide>
                        <div className="swiper-card">
                            <img src="https://images.unsplash.com/photo-1521566652839-697aa473761a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww" alt="" />
                            <h3>Claire</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nisi ipsam expedita placeat eos delectus minima cum possimus, qui ipsa at et quae aut. Tempore molestias minima velit aliquid quasi.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-card">
                            <img src="https://images.unsplash.com/photo-1521566652839-697aa473761a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww" alt="" />
                            <h3>Claire</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nisi ipsam expedita placeat eos delectus minima cum possimus, qui ipsa at et quae aut. Tempore molestias minima velit aliquid quasi.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-card">
                            <img src="https://images.unsplash.com/photo-1521566652839-697aa473761a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww" alt="" />
                            <h3>Claire</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nisi ipsam expedita placeat eos delectus minima cum possimus, qui ipsa at et quae aut. Tempore molestias minima velit aliquid quasi.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-card">
                            <img src="https://images.unsplash.com/photo-1521566652839-697aa473761a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww" alt="" />
                            <h3>Claire</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nisi ipsam expedita placeat eos delectus minima cum possimus, qui ipsa at et quae aut. Tempore molestias minima velit aliquid quasi.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-card">
                            <img src="https://images.unsplash.com/photo-1521566652839-697aa473761a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww" alt="" />
                            <h3>Claire</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nisi ipsam expedita placeat eos delectus minima cum possimus, qui ipsa at et quae aut. Tempore molestias minima velit aliquid quasi.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>


        </div >
    )
}

export default Testimonials

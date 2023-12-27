import * as React from 'react';
import { Swiper as SwiperModule, SwiperSlide } from 'swiper/react';
import { Box } from '@mui/material';

const SwiperBanner = () => {
    return (
        <section className='section heroBanner'>
            <Box className='swiperBanner'>
                <SwiperModule
                    effect="fade"
                    spaceBetween={0}
                    slidesPerView={1}
                    lazy={true}
                    autoplay={{
                        delay: 9000,
                        disableOnInteraction: true,
                    }}
                    fadeEffect={{ crossFade: true }}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </SwiperModule>
            </Box>
        </section>
    )
}

export default SwiperBanner
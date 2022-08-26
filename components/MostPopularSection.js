import Image from "next/image"
import Link from "next/link"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from "swiper"
// Import Swiper styles
import 'swiper/css';
import Author from "./childComponents/Author"

function MostPopularSection() {
    SwiperCore.use([Autoplay])

    return (
        <section className="container mx-auto md:mx-20 py-16">
            <div className="">
                <h1 className="font-bold text-4xl pb-12 text-center capitalize">Most Popular</h1>
            </div>
            <Swiper
                spaceBetween={32}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    640: { slidesPerView: 1 },
                }}
                autoplay={{
                    delay: 8000
                }}
            >
                <SwiperSlide>{Post()}</SwiperSlide>
                <SwiperSlide>{Post()}</SwiperSlide>
                <SwiperSlide>{Post()}</SwiperSlide>
                <SwiperSlide>{Post()}</SwiperSlide>
                <SwiperSlide>{Post()}</SwiperSlide>
                <SwiperSlide>{Post()}</SwiperSlide>
            </Swiper>
        </section>
    )
}

function Post() {
    return (
        <div className="grid m-4 ">
            <div className="images">
                <Link href={"/"}>
                    <Image src={"/images/img1.jpg"} alt="" width={600} height={400} className="rounded cursor-pointer" />
                </Link>
            </div>
            <div className="info flex justify-center flex-col mt-2">
                <div className="categories">
                    <Link href={"/"}>
                        <a className="text-orange-600 hover:text-orange-800" title="Business, Travel">Business, Travel</a>
                    </Link>
                    <Link href={"/"}>
                        <a className="text-gray-800 hover:text-gray-600">-August 25, 2022</a>
                    </Link>
                </div>
                <div className="title">
                    <Link href={"/"}>
                        <a className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">
                            Your most unhappy customers are your greatest source of learning.
                        </a>
                    </Link>
                </div>
                <p className="py-3 text-gray-600">
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind
                    text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
                <Author></Author>
            </div>
        </div>
    )
}


export default MostPopularSection

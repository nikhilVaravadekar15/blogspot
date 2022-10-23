import Image from "next/image"
import Link from "next/link"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from "swiper"
// Import Swiper styles
import 'swiper/css';
import Author from "./childComponents/Author"

function LatestPostsSection() {
    SwiperCore.use([Autoplay])
    return (
        <section className="py-16 sm:bg-left-bottom sm:bg-contain" style={{
            background: "url('/images/banner.png') no-repeat 104% 50%",
            backgroundPosiont: "right"
        }}>
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-4xl pb-12 text-center capitalize">Latest Posts</h1>
            </div>
            <Swiper
                spaceBetween={48}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 8000
                }}
            >
                <SwiperSlide>{slide()}</SwiperSlide>
                <SwiperSlide>{slide()}</SwiperSlide>
                <SwiperSlide>{slide()}</SwiperSlide>
                <SwiperSlide>{slide()}</SwiperSlide>
                <SwiperSlide>{slide()}</SwiperSlide>
            </Swiper>
        </section>
    )
}

function slide() {
    return (
        <div className="grid md:grid-cols-2 justify-items-center sm:grid-cols-1">
            <div className="image justify-center">
                <Link href={"/"}>
                    <Image src={"/images/img1.jpg"} className="cursor-pointer" alt="" width={"600"} height={"600"} />
                </Link>
            </div>
            <div className="info flex justify-center flex-col w-3/4 mr-12 sm:mt-6">
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
                        <a className="text-3xl md:text-5xl font-bold text-gray-800 hover:text-gray-600">
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

export default LatestPostsSection

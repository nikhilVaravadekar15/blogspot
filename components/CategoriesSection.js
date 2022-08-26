import Image from "next/image"
import Link from "next/link"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from "swiper"
// Import Swiper styles
import 'swiper/css';
import Author from "./childComponents/Author"

function CategoriesSection() {
    return (
        <section className="container mx-auto md:px-20 py-16">
            <div className="grid lg:grid-cols-2 md:grid-cols-1">
                {Category()}
                {Category()}
            </div>
        </section>
    )
}


function Category() {
    return (
        <div className="item">
            <h1 className="font-bold text-4xl pb-12 text-left capitalize">Technology</h1>
            <div className="flex flex-col gap-6">
                {Post()}
                {Post()}
                {Post()}
                {Post()}
            </div>
        </div>
    )
}

function Post() {
    return (
        <div className="flex gap-4">
            <div className="image flex-col justify-start">
                <Link href={"/"}>
                    <a>
                        <Image src={"/images/img1.jpg"} alt="" width={300} height={250} className="rounded cursor-pointer" />
                    </a>
                </Link>
            </div>
            <div className="info flec justify-center flex-col">
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
                        <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
                            Your most unhappy customers are your greatest source of learning.
                        </a>
                    </Link>
                </div>
                <Author></Author>
            </div>
        </div>
    )
}

export default CategoriesSection

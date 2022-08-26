import Image from "next/image"
import Link from "next/link"
import Author from "./childComponents/Author"

function LatestPostsSection() {
    return (
        <section className="container mx-auto md:px-20 py-10">
            <h1 className="text-4xl font-bold py-12 text-center capitalize">Latest Posts</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12">
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
            </div>
        </section>
    )
}

function Post() {
    return (
        <div className="item">
            <div className="images">
                <Link href={"/"}>
                    <Image src={"/images/img1.jpg"} alt="" width={500} height={350} className="rounded cursor-pointer" />
                </Link>
            </div>
            <div className="info flex justify-center flex-col">
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
                        <a className="text-xl md:text-2xl font-bold text-gray-800 hover:text-gray-600">
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

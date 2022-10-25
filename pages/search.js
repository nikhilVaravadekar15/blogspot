import Image from "next/image"
import Link from "next/link"
import Format from '../layout/Format'
import Error from "../components/Error"
import Author from "../components/childComponents/Author"
import { useState } from "react"

function search() {
    const [found, setFound] = useState(false);

    return (
        <div>
            <Format>
                {
                    found ? <section className="container mx-auto py-16 md:px-20 sm:bg-left-bottom sm:bg-contain">
                        <div className="flex gap-3 pb-12">
                            <h1 className="font-bold text-2xl"> Showing results for: </h1>
                            <h2 className="font-bold text-2xl"> aiml </h2>
                        </div>
                        <div className="item">
                            <div className="flex flex-col gap-4">
                                {Post()}
                                {Post()}
                                {Post()}
                                {Post()}
                            </div>
                        </div>
                    </section>
                        : <section className="container mx-auto py-16 md:px-20 sm:bg-left-bottom sm:bg-contain">
                            <div className="flex gap-3 pb-2">
                                <h1 className="font-bold text-2xl"> Your search - </h1>
                                <h2 className="font-bold text-2xl cursor-pointer"> aiml </h2>
                                <h1 className="font-extrabold text-2xl"> - did not match any documents.</h1>
                            </div>
                            <div className="flex flex-col gap-3 py-4">
                                <span className="font-bold text-2xl">Suggestions:</span>
                                <ul className="mx-4">
                                    <li className="font-bold text-sm">Make sure that all words are spelled correctly.</li>
                                    <li className="font-bold text-sm">Try different keywords.</li>
                                    <li className="font-bold text-sm">Try more general keywords.</li>
                                    <li className="font-bold text-sm">Try fewer keywords.</li>
                                </ul>
                            </div>
                            <Error></Error>
                        </section>
                }
            </Format>
        </div>
    )
}


function Post() {
    return (
        <div className="flex gap-4">
            <div className="image flex-col justify-start">
                <Link href={"/"}>
                    <a>
                        <Image src={"/images/img1.jpg"} alt="" width={256} height={208} className="rounded cursor-pointer" />
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





export default search

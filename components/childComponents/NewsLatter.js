
function NewsLatter() {
    return (
        <section className="bg-gray-50 mt-20">
            <div className="container mx-auto md:px-20 md:py-16 text-center">
                <h1 className="font-bold text-3xl ">Subscribe to newsletter</h1>
                <div className="w-1/2 container mx-auto py-1 my-4 shadow border rounded-full flex justify-between ">
                    <input type="email" name="" className="text-gray-700 mx-6 bg-transparent outline-none border-none w-9/12" placeholder="Enter your email" />
                    <button className=" bg-orange-400 px-9 py-2 mr-2 text-gray-50 text-xl rounded-full hover:text-gray-600 hover:bg-orange-300">Subscribe</button>
                </div>
            </div>
        </section>
    )
}

export default NewsLatter

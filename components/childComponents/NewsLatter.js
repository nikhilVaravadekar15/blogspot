
function NewsLatter() {
    return (
        <section className="bg-gray-50 mt-20">
            <div className="container mx-auto sm:px-0 md:px-12 sm:py-16 text-center flex justify-center items-center flex-col">
                <h1 className="font-bold text-3xl ">Subscribe to newsletter</h1>
                <div className="w-11/12 sm:w-4/5 md:w-8/12 container md:mx-auto py-1 my-4 shadow border rounded-full flex justify-between ">
                    <input type="email" name="" className="text-gray-700 mx-6 bg-transparent outline-none border-none w-9/12" placeholder="Enter your email" />
                    <button className=" bg-orange-400 px-2 sm:px-2 md:px-5 lg:px-9 py-2 mr-2 text-gray-50 text-xl rounded-full hover:text-gray-600 hover:bg-orange-300">Subscribe</button>
                </div>
            </div>
        </section>
    )
}

export default NewsLatter


function Loading() {
    return (
        <div className="loading relative w-28 h-28 flex justify-center items-center">
            <span
                style={{
                    animation: "animate 5s linear infinite",
                    borderRadius: "38% 62% 64% 36% / 43% 35% 65% 57%"
                }} className="absolute top-0 left-0 w-full h-full border border-slate-800 "></span>
            <span
                style={{
                    animation: "animate 5s linear infinite",
                    animationDirection: "reverse",
                    borderRadius: "34% 66% 25% 75% / 54% 27% 73% 46%"
                }}
                className="absolute top-0 left-0 w-full h-full border border-slate-800 "></span>
            <span
                style={{
                    animation: "animate 3s linear infinite",
                    borderRadius: "45% 55% 63% 37% / 32% 42% 58% 68%"
                }}
                className="absolute top-0 left-0 w-full h-full border border-slate-800 "></span>
            <h2 className='text-gray-700 text-lg font-normal'>Loading...</h2>
        </div>
    )
}

export default Loading

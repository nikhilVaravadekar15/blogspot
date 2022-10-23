import { useState } from "react"

function Chip({ children }) {
    const [chip, setChip] = useState(false)
    return (
        <div className={`border m-1 px-4 py-2 w-fit flex items-center justify-center rounded-3xl cursor-pointer ${chip ? "bg-blue-300 font-bold" : "bg-white"}`}
            onClick={() => setChip(!chip)}
        >
            <span className="font-normal text-xs ">
                {children}
            </span>
        </div>
    )
}

export default Chip

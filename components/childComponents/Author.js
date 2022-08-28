import Image from "next/image"
import Link from "next/link"

function Author() {
  return (
    <div className="author flex py-5">
      <Image src={"/images/author/author1.jpg"} alt="" width={"60"} height={"60"} draggable="false" className="rounded-full cursor-pointer" />
      <div className="flex flex-col justify-center px-4">
        <Link href={"/"}>
          <a className="text-md font-bold text-gray-800 hover:text-gray-600">Elon Musk</a>
        </Link>
        <span className="text-sm text-gray-500">CEO and Founder</span>
      </div>
    </div>
  )
}

export default Author

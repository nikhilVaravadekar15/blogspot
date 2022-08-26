import Link from "next/link";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import NewsLatter from "./childComponents/NewsLatter";

function Footer() {

  return (
    <footer className="bg-gray-50">
      <NewsLatter></NewsLatter>
      <div className="container mx-auto flex justify-center py-12 " style={{
        background: "url('/images/footer.png') no-repeat",
        backgroundRepeat: "no-repeat",
        backgroundPosiont: "bottom left"
      }}>
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href={"/"}>
              <a><ImFacebook color="#777777" className="cursor-pointer" title="Facebook" /></a>
            </Link>
            <Link href={"/"}>
              <a><ImTwitter color="#777777" className="cursor-pointer" title="Twitter" /></a>
            </Link>
            <Link href={"/"}>
              <a><ImYoutube color="#777777" className="cursor-pointer" title="Youtube" /></a>
            </Link>
          </div>
          <p className="py-5 text-gray-500">Copyright © 2022 All rights reserved</p>
          <p className="text-center text-gray-400">
            <Link href={"/"}><a className="hover:text-gray-600">Terms </a></Link> &
            <Link href={"/"}><a className="hover:text-gray-600"> Conditions</a></Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

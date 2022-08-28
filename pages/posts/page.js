import Image from "next/image"
import Head from "next/head"
import Format from "../../layout/Format"
import Author from "../../components/childComponents/Author"
import Related from "../../components/childComponents/Related"

function page() {
  return (
    <Format>
      <Head>
        <title>Blogspot | Your most unhappy customers are your greatest source of learning.</title>
      </Head>

      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Author></Author>
        </div>
        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">
            Your most unhappy customers are your greatest source of learning.
          </h1>
          <p className="text-gray-500 text-xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sunt aspernatur animi accusamus aperiam voluptatum culpa possimus enim voluptatibus magni!</p>
          <div className="post__image py-10">
            <Image src={"/images/img1.jpg"} alt="" width={900} height={600}></Image>
          </div>
          <div className="post__content text-gray-600 text-lg flex flex-col gap-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga, officia id, exercitationem, cupiditate dolorum voluptatem quasi et ratione reprehenderit velit voluptates? Minus earum reprehenderit at voluptatem autem! Rerum et modi obcaecati, voluptate amet atque quis ab, explicabo culpa temporibus nemo aliquid? Iste, nesciunt eius cupiditate aspernatur maxime, aliquid laborum magni unde similique veniam, temporibus impedit ratione assumenda eaque esse!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempora voluptatem, praesentium tenetur est quis eos placeat pariatur unde nam deleniti magni iste dolor architecto distinctio necessitatibus a sed reiciendis suscipit aperiam nostrum! Dignissimos, non ullam hic id explicabo mollitia ex tempore itaque illum, ea rem deserunt exercitationem? Quae harum ea natus vitae. Repellendus, molestiae! Magnam facilis dolorem tenetur quisquam.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe doloremque incidunt sequi in nam ipsa corporis fugit, laborum unde assumenda nesciunt itaque, adipisci non consequatur? Minima molestias quos ipsum consectetur inventore vitae nostrum quae placeat, minus repellat fugiat, laborum mollitia ab. Nulla distinctio autem qui alias consectetur sint. Fuga dolore, veniam quia totam dignissimos quaerat pariatur. Enim blanditiis itaque neque voluptates ipsa? Suscipit quam expedita commodi perferendis cumque! Magni temporibus doloremque ex neque eligendi in omnis laboriosam maiores minima, animi voluptatibus velit dolorem molestias quam? Ab doloribus voluptatum sequi, repellat optio aperiam corporis, vitae aut itaque minima placeat id vero.
            </p>
          </div>
        </div>
        <Related></Related>
      </section>
    </Format>
  )
}

export default page

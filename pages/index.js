import Format from '../layout/Format'
import LatestPostsSection from '../components/LatestPostsSection'
import CategoriesSection from '../components/CategoriesSection'
import AllPostsSection from '../components/AllPostsSection'
import ChipsSection from '../components/ChipsSection'
// import MostPopularSection from '../components/MostPopularSection'

export default function Home() {
  return (
    <div>
      <Format>
        <LatestPostsSection></LatestPostsSection>
        <CategoriesSection></CategoriesSection>
        <div>
          <h1 className="text-4xl font-bold py-12 text-center capitalize">All Posts</h1>
          <div className="container mx-auto flex justify-center gap-6 flex-col-reverse lg:flex-row">
            <div className="w-full flex justify-center items-center md:w-9/12 ">
              <AllPostsSection></AllPostsSection>
            </div>
            <div className="w-full lg:w-3/12 sm:py-8">
              <ChipsSection></ChipsSection>
            </div>
          </div>
        </div>
        {/* <MostPopularSection></MostPopularSection> */}
      </Format>
    </div>
  )
}

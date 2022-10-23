import Format from '../layout/Format'
import LatestPostsSection from '../components/LatestPostsSection'
import CategoriesSection from '../components/CategoriesSection'
import AllPostsSection from '../components/AllPostsSection'
// import MostPopularSection from '../components/MostPopularSection'

export default function Home() {
  return (
    <div>
      <Format>
        <LatestPostsSection></LatestPostsSection>
        <CategoriesSection></CategoriesSection>
        <AllPostsSection></AllPostsSection>
        {/* <MostPopularSection></MostPopularSection> */}
      </Format>
    </div>
  )
}

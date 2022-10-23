import Format from '../layout/Format'
import TrendingSection from '../components/TrendingSection'
import LatestPostsSection from '../components/LatestPostsSection'
import MostPopularSection from '../components/MostPopularSection'
import CategoriesSection from '../components/CategoriesSection'

export default function Home() {
  return (
    <div>
      <Format>
        <TrendingSection></TrendingSection>
        <LatestPostsSection></LatestPostsSection>
        <MostPopularSection></MostPopularSection>
        <CategoriesSection></CategoriesSection>
      </Format>
    </div>
  )
}

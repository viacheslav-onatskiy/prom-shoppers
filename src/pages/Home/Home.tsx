import ProductsList from '../../components/ProductsList';
import RecommendedCategories from '../../components/RecommendedCategories';
import { HomeContainer } from './Home.styles';

const Home = () => {
  return (
    <HomeContainer>
      <ProductsList />

      <RecommendedCategories />
    </HomeContainer>
  );
};

export default Home;

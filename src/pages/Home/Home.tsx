import Banners from "../../components/Banners/Banners";
import Categories from "../../components/Categories/Categories";
import Hero from "../../components/Hero/Hero";
import { categoryList} from "../../data/data";
const Home = () => {
  return (
    <>
      <Hero />
      <Banners />
      <Categories categories={categoryList}/>
    </>
  );
};

export default Home;

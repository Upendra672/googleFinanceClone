import HomeHeader from "../components/HomeHeader";
import HomeMarketTrend from "../components/HomeMarketTrend";
import HomeStockList from "../components/HomeStockList";
import Homenews from "../components/Homenews";
const Home = () => {
  return (
    <>
      <HomeHeader />
      <div className=" w-[100%] mx-auto md:w-[99%] md:px-2 lg:w-[80%] 2xl:w-[70%] z-[-10] relative">
        <HomeStockList />
        <Homenews/>
        <HomeMarketTrend/>
      </div>
      <div className=" w-[100%] mx-auto md:w-[99%] md:px-2 lg:w-[80%] 2xl:w-[70%] z-[-10] ">
      
      </div>

    </>
  );
};

export default Home;

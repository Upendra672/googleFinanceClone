import IndexDetails from "./IndexDetails";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <>
      <div className="w-full relative none md:min-h-[145px] bg-[rgb(248,249,250)] m-b-[8px] p-b-[16px] z-[5]">
        <div className="pattern hidden md:block absolute  top-[40px] w-full h-full bg-bottom z-[-45]">
          {" "}
        </div>
        <div className=" w-[100%] mx-auto md:w-[99%] md:px-2 lg:w-[80%] 2xl:w-[70%] z-[1]">
          <IndexDetails />
          <SearchBar />
        </div>
        
      </div>
    </>
  );
};

export default Home;

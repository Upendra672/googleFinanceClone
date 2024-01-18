import FooterIndex from "./FooterIndex";

const Footer = () => {
  return (
    <>
    <div
        id="full_screen"
        className="mt-4 bg-gray-100 w-full lg:mt-[1450px] xl:mt-[1500px] 2xl:mt-[1650px]"
      >
        <div className=" w-[100%] mx-auto md:w-[99%] md:px-2 lg:w-[80%] 2xl:w-[70%] z-[-10] ">
          <FooterIndex />
        </div>
      </div>
      
    </>
  );
};

export default Footer;
// lg:absolute  lg:top-[540%]  xl:top-[465%]  2xl:top-[275%] min-[2560px]:top-[220%]
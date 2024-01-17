import { useState } from "react";
import burgersvg from "../assets/burger-menu.svg";
import google from "../assets/google.svg";
import menu from "../assets/menu-svgrepo.svg";
import profile from "../assets/react.svg";
import uptrend from "../assets/uptrend.svg"
import searchtrend from "../assets/searchtrend.svg";
import add from "../assets/add.png"; 
import list from "../assets/list.svg"; 
import uparrow from "../assets/up.png"
import downarrow from "../assets/downarrow.png"


const NavBar = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
   
      <div className="flex justify-between mt-2 px-6 py-2">
          {/* main navbar starts*/}
        <div className="flex box-border h-[48px]">
          {/* humburger */}
          <button onClick={toggleSidebar}
           className="flex items-center hover:bg-[#d3d5d6] hover:rounded-full p-3 cursor-pointer"><img className="w-6 " src={burgersvg} alt="burger-svg" /></button>

          {/* logo */}
          <div className="flex items-center mx-4"><span><img src={google} alt="googleSVG"/></span><span className="text-[#5f6368] pl-[4px] text-[22px] relative top-[-1.5px]">Finance</span></div>
        </div>  
    
        <div className="flex box-border h-[48px] items-center">
          {/* menu */}
          <div className="mx-[20px] hover:bg-[#d3d5d6] hover:rounded-full p-3"><img className="w-6 " src={menu} alt="multi-menu" /></div>

          {/* profile */}   
          <div className=""><img className="p-1 hover:bg-[#dee5ed] hover:rounded-full" src={profile} alt="" /></div>
        </div>
      </div>


    {/* sidebar nav menu */}
    <div className={`bg-white h-full w-72 absolute top-0 border-r-2 border-indigo-200 z-[6] ${isSidebarOpen ? 'open' : ''}`} id="sidebar">
      {/* google logo */}
      <div className="flex justify-between items-center">
    <div className="flex items-center mx-3 my-4"><span><img className="w-24" src={google} alt="googleSVG"/></span><span className="text-[#5f6368] pl-[4px] text-2xl leading-6 relative top-[-1.5px] font-normal cursor-pointer">Finance</span></div>
    <button onClick={toggleSidebar} className="flex items-center px-[15px] rounded-full text-[18px] mr-[15px] h-[30px] shadow-lg shadow-blue-500/50 cursor-pointer">X</button>
      </div>

     {/* main menu */}
     <div className=" mt-8">
    <div className="h-[38px]">
      <a className="flex px-6" href="">
        <img  src={uptrend} alt="uptrend" />
        <div className="px-4 text-xl font-normal">Home</div>
      </a>
    </div>
    <div className="h-[38px]">
      <a className="flex px-6" href="">
        <img  src={searchtrend} alt="uptrend" />
        <div className="px-4 text-xl font-normal">Market Trends</div>
      </a>
    </div>
    </div>

    {/* submenu */}
    <div className=" mt-8">
    <div className="h-[38px]">
      <div className="flex pl-6 justify-between pr-4">
        <p className="text-[#333333] text-lg font-normal">PORTFOLIOS</p>
        <img className="w-7" src={add} alt="uptrend" />
      </div>
    </div>

    <div className="h-[38px] mt-2">
      <div className="flex pl-6 justify-between pr-4">
        <p className="text-[#333333] text-lg font-normal">WATCHLISTS</p>
        <img className="w-7" src={add} alt="uptrend" />
      </div>
    </div>
    </div>

    {/* watchlist tab */}
    <div className=" mt-6">
    <div className="h-[38px]">
      <a className="flex px-6" href="">
        <img  src={list} alt="uptrend" />
        <div className="px-4 text-xl font-normal">Watchlist</div>
      </a>
    </div>
    </div>

    {/* most active */}
    <div className="mt-8">
      <p className="pl-2 text-[#333333] mb-4">MOST ACTIVE</p>
      <div className="pl-6">
      <div className="flex items-center mt-4">
        <div className="p"><img className="w-8 mr-4" src={uparrow} alt="uparrow" /></div>
        <div className="flex justify-between w-full">
        <h3 className="mr-4 pl-2">Inflebeam Avenu..</h3>
        <p className="text-green-600 pr-2">+9.10%</p>
        </div>
      </div>  

      <div className="flex items-center mt-4">
        <div className="p"><img className="w-8 mr-4" src={downarrow} alt="downtrend" /></div>
        <div className="flex justify-between w-full">
        <h3 className="mr-4 pl-2">Yes Bank LTD..</h3>
        <p className="text-red-600 pr-2">-2.10%</p>
        </div>
      </div>

      <div className="flex items-center mt-4">
        <div className="p"><img className="w-8 mr-4" src={uparrow} alt="uptrend" /></div>
        <div className="flex justify-between w-full">
        <h3 className="mr-4 pl-2">Katiya chemica..</h3>
        <p className="text-green-600 pr-2">+24.09%</p>
        </div>
      </div>

      <div className="flex items-center mt-4">
        <div className="p"><img className="w-8 mr-4" src={downarrow} alt="downtrend" /></div>
        <div className="flex justify-between w-full">
        <h3 className="mr-4 pl-2">Vodaphone Idea..</h3>
        <p className="text-red-600 pr-2">-1.22%</p>
        </div>
      </div>

      <div className="flex items-center mt-4">
        <div className="p"><img className="w-8 mr-4" src={downarrow} alt="downtrend" /></div>
        <div className="flex justify-between w-full">
        <h3 className="mr-4 pl-2">Boat PVT LTD</h3>
        <p className="text-red-600 pr-2">-8.22%</p>
        </div>
      </div>

      <div className="flex items-center mt-4">
        <div className="p"><img className="w-8 mr-4" src={uparrow} alt="uptrend" /></div>
        <div className="flex justify-between w-full">
        <h3 className="mr-4 pl-2">Tata Power L..</h3>
        <p className="text-green-600 pr-2">+24.09%</p>
        </div>
      </div>

      <div className="flex items-center mt-4">
        <div className="p"><img className="w-8 mr-4" src={uparrow} alt="uptrend" /></div>
        <div className="flex justify-between w-full">
        <h3 className="mr-4 pl-2">Inflebeam Avenu..</h3>
        <p className="text-green-600 pr-2">+9.10%</p>
        </div>
        
      </div>
      </div>
    </div>

    </div>
    {/* sidebar ends */}
   
    </>
  );
};

export default NavBar;

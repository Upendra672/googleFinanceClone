import { useEffect, useState } from "react";
import searchIcon from "../assets/searchIcon.svg"
const SearchBar = () => {

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log(inputValue)
  }, [inputValue])
  

  return (
      <>
      <div className='flex items-center justify-center mt-4' >
        <div className='flex items-center border-2 rounded-full w-[95%]  lg:w-[70%] xl:w-[60%] h-auto p-3 bg-white shadow-sm border-[1px]	box-shadow: 0px 14px 13px 0px #e5ded7;'>
            <div><img className="w-6" src={searchIcon} alt="" /></div>
            <input  className="ml-4 w-full text-black  placeholder-black placeholder-text-md outline-none focus:border-none" type="text"  placeholder="Search for stocks, ETFs & more" id="search" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
        </div>
      </div>
    </>
  )
}

export default SearchBar
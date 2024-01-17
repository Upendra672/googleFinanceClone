import downarrow from "../assets/downarrow.png";
import uparrow from "../assets/up.png";
const IndexDetails = () => {
  return (
    <>
      <div className="max-w-[100%]">
        {/* markets li start here */}
        <div id="header">
          <ul className="flex text-[#393434] overflow-x-auto no-scrollbar pl-4">
            <li className="mr-4 flex">COMPARE_MARKETS</li>
            <li className="mr-4">US</li>
            <li className="mr-4">Europe</li>
            <li className="mr-4">India</li>
            <li className="mr-4">Currencies</li>
            <li className="mr-4">Crypto</li>
            <li className="mr-4">Futures</li>
          </ul>
        </div>
        {/* markets li ends here */}

        {/* start index detail */}
        <div
          id="index_details"
          className="flex mt-1 overflow-x-auto items-center pl-[14px] no-scrollbar"
        >
          {/* 1 */}
          <div className="box-border flex p-2 border border-red-500 rounded-md mr-1 items-center min-w-[200px] max-h-[60px] lg:max-h-[70px]">
            <div className="box-border mr-2 2xl:w-12 xl:w-12 lg:w-12 md:w-36">
              <img src={downarrow} alt="downarrow" />
            </div>
            <div className="mr-3">
              <p className="font-medium text-[0.75rem] lg:text-[1rem] ">
                Nifty Futures
              </p>
              <p className="text-[#393434] text-[0.75rem] md:text-[1rem]">
                $37,748.00
              </p>
            </div>
            <div className="flex flex-col item items-end">
              <p className="text-[red] text-[0.85rem] lg:text-[1rem]">-0.47%</p>
              <p className="text-[red] text-[0.85rem] lg:text-[1rem]">
                -$179.00
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="box-border flex p-2 border border-green-500 rounded-md mr-1 items-center min-w-[200px] max-h-[60px] lg:max-h-[70px]">
            <div className="box-border mr-2 2xl:w-12 xl:w-12 lg:w-12 md:w-36">
              <img src={uparrow} alt="downarrow" />
            </div>
            <div className="mr-3">
              <p className="font-medium text-[0.75rem] lg:text-[1rem] ">
                BankNifty Futures
              </p>
              <p className="text-[#393434] text-[0.75rem] md:text-[1rem]">
                $37,748.00
              </p>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-[green] text-[0.85rem] lg:text-[1rem]">+0.70%</p>
              <p className="text-[green] text-[0.85rem] lg:text-[1rem]">
                $17.000
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="box-border flex p-2 border border-green-500 rounded-md mr-1 items-center min-w-[200px] max-h-[60px] lg:max-h-[70px]">
            <div className="box-border mr-2 2xl:w-12 xl:w-12 lg:w-12 md:w-36">
              <img src={uparrow} alt="downarrow" />
            </div>
            <div className="mr-3">
              <p className="font-medium text-[0.75rem] lg:text-[1rem] ">
                Sensex Futures
              </p>
              <p className="text-[#393434] text-[0.75rem] md:text-[1rem]">
                $37,748.00
              </p>
            </div>
            <div className="flex flex-col item items-end">
              <p className="text-[green] text-[0.85rem] lg:text-[1rem]">0.47%</p>
              <p className="text-[green] text-[0.85rem] lg:text-[1rem]">
                $179.00
              </p>
            </div>
          </div>
          {/* 4 */}
          <div className="box-border flex p-2 border border-red-500 rounded-md mr-1 items-center min-w-[200px] max-h-[60px] lg:max-h-[70px]">
            <div className="box-border mr-2 2xl:w-12 xl:w-12 lg:w-12 md:w-36">
              <img src={downarrow} alt="downarrow" />
            </div>
            <div className="mr-3">
              <p className="font-medium text-[0.75rem] lg:text-[1rem] ">
                Dow Futures
              </p>
              <p className="text-[#393434] text-[0.75rem] md:text-[1rem]">
                $37,748.00
              </p>
            </div>
            <div className="flex flex-col item items-end">
              <p className="text-[red] text-[0.85rem] lg:text-[1rem]">-0.47%</p>
              <p className="text-[red] text-[0.85rem] lg:text-[1rem]">
                -$179.00
              </p>
            </div>
          </div>
          {/* 5 */}
          <div className="box-border flex p-2 border border-green-500 rounded-md mr-1 items-center min-w-[200px] max-h-[60px] lg:max-h-[70px]">
            <div className="box-border mr-2 2xl:w-12 xl:w-12 lg:w-12 md:w-36">
              <img src={uparrow} alt="downarrow" />
            </div>
            <div className="mr-3">
              <p className="font-medium text-[0.75rem] lg:text-[1rem] ">
                Sensex Futures
              </p>
              <p className="text-[#393434] text-[0.75rem] md:text-[1rem]">
                $37,748.00
              </p>
            </div>
            <div className="flex flex-col item items-end">
              <p className="text-[green] text-[0.85rem] lg:text-[1rem]">0.47%</p>
              <p className="text-[green] text-[0.85rem] lg:text-[1rem]">
                $179.00
              </p>
            </div>
          </div>
        </div>
        {/* end index details */}


      </div>
    </>
  );
};

export default IndexDetails;

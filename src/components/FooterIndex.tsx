import roundedadd from "../assets/roundadd.png";
import google from "../assets/google.svg";
import { useRef } from "react";
const FooterIndex = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const scrollContainer2Ref = useRef<HTMLDivElement>(null);
  
    const handleScroll = (direction: "left" | "right", containerRef: React.RefObject<HTMLDivElement>) => {
      const scrollAmount = 50; // Adjust as needed
      const scrollContainer = containerRef.current;
  
      if (scrollContainer) {
        if (direction === "left") {
          scrollContainer.scrollLeft -= scrollAmount;
        } else if (direction === "right") {
          scrollContainer.scrollLeft += scrollAmount;
        }
      }
    };

  return (
    <>
      <div>
        <div className="px-4 pt-4">
          <div className="text-[20px] font-normal">Discover more</div>
          <div className="pt-1 font-medium text-[14px]">
            You may be interested in
          </div>
        </div>
        {/* scroll containers start here */}
        <div className="relative">
          <button
            className="absolute top-[40%] left-[0%] lg:left-[-2%] rounded-full text-[25px] p-2 bg-blue-200 w-10 h-10 flex justify-center items-center z-20"
            onClick={() => handleScroll("left",scrollContainerRef)}
          >
            &lt;
          </button>
          <div
            id="scroll"
            ref={scrollContainerRef}
            className="px-4 pt-4 flex overflow-x-auto no-scrollbar w-full relative"
          >
            <div
              id="Infocontianer"
              className="border-[1px] flex flex-col items-start justify-between h-[162px] min-w-[156px] rounded-[12px] box-border p-2 bg-white mx-1"
            >
              <div>
                <div className="rounded border-[1px] inline px-1 py-[0.8px] border-black font-medium text-[12px]">
                  INDEX1
                </div>
                <div className="font-medium text-[14px]">BSE SENSEX</div>
              </div>
              <div className="w-[100%] px-1">
                <div className="font-medium text-[18px]">71,843.45</div>
                <div className=" flex items-center justify-between ">
                  <div className="px-3 py-1 bg-red-200 rounded-md text-red-900 font-medium">
                    1.76%
                  </div>
                  <div>
                    <img src={roundedadd} alt="addbutton" />
                  </div>
                </div>
              </div>
            </div>

            <div
              id="Infocontianer"
              className="border-[1px] flex flex-col items-start justify-between h-[162px] min-w-[156px] rounded-[12px] box-border p-2 bg-white mx-1"
            >
              <div>
                <div className="rounded border-[1px] inline px-1 py-[0.8px] border-black font-medium text-[12px]">
                  INDEX
                </div>
                <div className="font-medium text-[14px]">BSE SENSEX</div>
              </div>
              <div className="w-[100%] px-1">
                <div className="font-medium text-[18px]">71,843.45</div>
                <div className=" flex items-center justify-between ">
                  <div className="px-3 py-1 bg-red-200 rounded-md text-red-900 font-medium">
                    1.76%
                  </div>
                  <div>
                    <img src={roundedadd} alt="addbutton" />
                  </div>
                </div>
              </div>
            </div>

            <div
              id="Infocontianer"
              className="border-[1px] flex flex-col items-start justify-between h-[162px] min-w-[156px] rounded-[12px] box-border p-2 bg-white mx-1"
            >
              <div>
                <div className="rounded border-[1px] inline px-1 py-[0.8px] border-black font-medium text-[12px]">
                  INDEX
                </div>
                <div className="font-medium text-[14px]">BSE SENSEX</div>
              </div>
              <div className="w-[100%] px-1">
                <div className="font-medium text-[18px]">71,843.45</div>
                <div className=" flex items-center justify-between ">
                  <div className="px-3 py-1 bg-green-200 rounded-md text-green-900 font-medium">
                    1.76%
                  </div>
                  <div>
                    <img src={roundedadd} alt="addbutton" />
                  </div>
                </div>
              </div>
            </div>

            <div
              id="Infocontianer"
              className="border-[1px] flex flex-col items-start justify-between h-[162px] min-w-[156px] rounded-[12px] box-border p-2 bg-white mx-1"
            >
              <div>
                <div className="rounded border-[1px] inline px-1 py-[0.8px] border-black font-medium text-[12px]">
                  INDEX4
                </div>
                <div className="font-medium text-[14px]">BSE SENSEX</div>
              </div>
              <div className="w-[100%] px-1">
                <div className="font-medium text-[18px]">71,843.45</div>
                <div className=" flex items-center justify-between ">
                  <div className="px-3 py-1 bg-red-200 rounded-md text-red-900 font-medium">
                    1.76%
                  </div>
                  <div>
                    <img src={roundedadd} alt="addbutton" />
                  </div>
                </div>
              </div>
            </div>

            <div
              id="Infocontianer"
              className="border-[1px] flex flex-col items-start justify-between h-[162px] min-w-[156px] rounded-[12px] box-border p-2 bg-white mx-1"
            >
              <div>
                <div className="rounded border-[1px] inline px-1 py-[0.8px] border-black font-medium text-[12px]">
                  INDEX
                </div>
                <div className="font-medium text-[14px]">BSE SENSEX</div>
              </div>
              <div className="w-[100%] px-1">
                <div className="font-medium text-[18px]">71,843.45</div>
                <div className=" flex items-center justify-between ">
                  <div className="px-3 py-1 bg-red-200 rounded-md text-red-900 font-medium">
                    1.76%
                  </div>
                  <div>
                    <img src={roundedadd} alt="addbutton" />
                  </div>
                </div>
              </div>
            </div>

            <div
              id="Infocontianer"
              className="border-[1px] flex flex-col items-start justify-between h-[162px] min-w-[156px] rounded-[12px] box-border p-2 bg-white mx-1"
            >
              <div>
                <div className="rounded border-[1px] inline px-1 py-[0.8px] border-black font-medium text-[12px]">
                  INDEX
                </div>
                <div className="font-medium text-[14px]">BSE SENSEX</div>
              </div>
              <div className="w-[100%] px-1">
                <div className="font-medium text-[18px]">71,843.45</div>
                <div className=" flex items-center justify-between ">
                  <div className="px-3 py-1 bg-green-200 rounded-md text-green-900 font-medium">
                    1.76%
                  </div>
                  <div>
                    <img src={roundedadd} alt="addbutton" />
                  </div>
                </div>
              </div>
            </div>

            <div
              id="Infocontianer"
              className="border-[1px] flex flex-col items-start justify-between h-[162px] min-w-[156px] rounded-[12px] box-border p-2 bg-white mx-1"
            >
              <div>
                <div className="rounded border-[1px] inline px-1 py-[0.8px] border-black font-medium text-[12px]">
                  INDEX7
                </div>
                <div className="font-medium text-[14px]">BSE SENSEX</div>
              </div>
              <div className="w-[100%] px-1">
                <div className="font-medium text-[18px]">71,843.45</div>
                <div className=" flex items-center justify-between ">
                  <div className="px-3 py-1 bg-red-200 rounded-md text-red-900 font-medium">
                    1.76%
                  </div>
                  <div>
                    <img src={roundedadd} alt="addbutton" />
                  </div>
                </div>
              </div>
            </div>

            <div
              id="Infocontianer"
              className="border-[1px] flex flex-col items-start justify-between h-[162px] min-w-[156px] rounded-[12px] box-border p-2 bg-white mx-1"
            >
              <div>
                <div className="rounded border-[1px] inline px-1 py-[0.8px] border-black font-medium text-[12px]">
                  INDEX
                </div>
                <div className="font-medium text-[14px]">BSE SENSEX</div>
              </div>
              <div className="w-[100%] px-1">
                <div className="font-medium text-[18px]">71,843.45</div>
                <div className=" flex items-center justify-between ">
                  <div className="px-3 py-1 bg-red-200 rounded-md text-red-900 font-medium">
                    1.76%
                  </div>
                  <div>
                    <img src={roundedadd} alt="addbutton" />
                  </div>
                </div>
              </div>
            </div>

            <div
              id="Infocontianer"
              className="border-[1px] flex flex-col items-start justify-between h-[162px] min-w-[156px] rounded-[12px] box-border p-2 bg-white mx-1"
            >
              <div>
                <div className="rounded border-[1px] inline px-1 py-[0.8px] border-black font-medium text-[12px]">
                  INDEX
                </div>
                <div className="font-medium text-[14px]">BSE SENSEX</div>
              </div>
              <div className="w-[100%] px-1">
                <div className="font-medium text-[18px]">71,843.45</div>
                <div className=" flex items-center justify-between ">
                  <div className="px-3 py-1 bg-green-200 rounded-md text-green-900 font-medium">
                    1.76%
                  </div>
                  <div>
                    <img src={roundedadd} alt="addbutton" />
                  </div>
                </div>
              </div>
            </div>

            <div
              id="Infocontianer"
              className="border-[1px] flex flex-col items-start justify-between h-[162px] min-w-[156px] rounded-[12px] box-border p-2 bg-white mx-1"
            >
              <div>
                <div className="rounded border-[1px] inline px-1 py-[0.8px] border-black font-medium text-[12px]">
                  INDEX9
                </div>
                <div className="font-medium text-[14px]">BSE SENSEX</div>
              </div>
              <div className="w-[100%] px-1">
                <div className="font-medium text-[18px]">71,843.45</div>
                <div className=" flex items-center justify-between ">
                  <div className="px-3 py-1 bg-red-200 rounded-md text-red-900 font-medium">
                    1.76%
                  </div>
                  <div>
                    <img src={roundedadd} alt="addbutton" />
                  </div>
                </div>
              </div>
            </div>

            <div
              id="Infocontianer"
              className="border-[1px] flex flex-col items-start justify-between h-[162px] min-w-[156px] rounded-[12px] box-border p-2 bg-white mx-1"
            >
              <div>
                <div className="rounded border-[1px] inline px-1 py-[0.8px] border-black font-medium text-[12px]">
                  INDEX
                </div>
                <div className="font-medium text-[14px]">BSE SENSEX</div>
              </div>
              <div className="w-[100%] px-1">
                <div className="font-medium text-[18px]">71,843.45</div>
                <div className=" flex items-center justify-between ">
                  <div className="px-3 py-1 bg-red-200 rounded-md text-red-900 font-medium">
                    1.76%
                  </div>
                  <div>
                    <img src={roundedadd} alt="addbutton" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="absolute top-[40%] right-[0%] lg:right-[-4%] rounded-full text-[25px] p-5 bg-blue-200 w-10 h-10 flex justify-center items-center z-[10]"
            onClick={() => handleScroll("right",scrollContainerRef)}
          >
            &gt;
          </button>
        </div>
        {/* scroll containers ends here here */}

        {/*2nd scroll containers start here */}
        <div className="relative">
        <button
            className="absolute top-[42%] left-[0%] lg:left-[-2%] rounded-full text-[25px] p-2 bg-blue-200 w-10 h-10 flex justify-center items-center z-20"
            onClick={() => handleScroll("left",scrollContainer2Ref)}
          >
            &lt;
          </button>
          <div
            id="scroll2"
            ref={scrollContainer2Ref}
            className="px-4 pt-4 flex overflow-x-auto no-scrollbar w-full"
          >
            <div
              id="Infocontianer"
              className="border-[1px] flex flex-col items-start justify-between h-[162px] min-w-[156px] rounded-[12px] box-border p-2 bg-white mx-1"
            >
              <div>
                <div className="rounded border-[1px] inline px-1 py-[0.8px] border-black font-medium text-[12px]">
                  INDEX
                </div>
                <div className="font-medium text-[14px]">BSE SENSEX</div>
              </div>
              <div className="w-[100%] px-1">
                <div className="font-medium text-[18px]">71,843.45</div>
                <div className=" flex items-center justify-between ">
                  <div className="px-3 py-1 bg-red-200 rounded-md text-red-900 font-medium">
                    1.76%
                  </div>
                  <div>
                    <img src={roundedadd} alt="addbutton" />
                  </div>
                </div>
              </div>
            </div>

            <div
              id="Infocontianer"
              className="border-[1px] flex flex-col items-start justify-between h-[162px] min-w-[156px] rounded-[12px] box-border p-2 bg-white mx-1"
            >
              <div>
                <div className="rounded border-[1px] inline px-1 py-[0.8px] border-black font-medium text-[12px]">
                  INDEX
                </div>
                <div className="font-medium text-[14px]">BSE SENSEX</div>
              </div>
              <div className="w-[100%] px-1">
                <div className="font-medium text-[18px]">71,843.45</div>
                <div className=" flex items-center justify-between ">
                  <div className="px-3 py-1 bg-green-200 rounded-md text-green-900 font-medium">
                    1.76%
                  </div>
                  <div>
                    <img src={roundedadd} alt="addbutton" />
                  </div>
                </div>
              </div>
            </div>

            <div
              id="Infocontianer"
              className="border-[1px] flex flex-col items-start justify-between h-[162px] min-w-[156px] rounded-[12px] box-border p-2 bg-white mx-1"
            >
              <div>
                <div className="rounded border-[1px] inline px-1 py-[0.8px] border-black font-medium text-[12px]">
                  INDEX
                </div>
                <div className="font-medium text-[14px]">BSE SENSEX</div>
              </div>
              <div className="w-[100%] px-1">
                <div className="font-medium text-[18px]">71,843.45</div>
                <div className=" flex items-center justify-between ">
                  <div className="px-3 py-1 bg-red-200 rounded-md text-red-900 font-medium">
                    1.76%
                  </div>
                  <div>
                    <img src={roundedadd} alt="addbutton" />
                  </div>
                </div>
              </div>
            </div>

            <div
              id="Infocontianer"
              className="border-[1px] flex flex-col items-start justify-between h-[162px] min-w-[156px] rounded-[12px] box-border p-2 bg-white mx-1"
            >
              <div>
                <div className="rounded border-[1px] inline px-1 py-[0.8px] border-black font-medium text-[12px]">
                  INDEX
                </div>
                <div className="font-medium text-[14px]">BSE SENSEX</div>
              </div>
              <div className="w-[100%] px-1">
                <div className="font-medium text-[18px]">71,843.45</div>
                <div className=" flex items-center justify-between ">
                  <div className="px-3 py-1 bg-red-200 rounded-md text-red-900 font-medium">
                    1.76%
                  </div>
                  <div>
                    <img src={roundedadd} alt="addbutton" />
                  </div>
                </div>
              </div>
            </div>

            <div
              id="Infocontianer"
              className="border-[1px] flex flex-col items-start justify-between h-[162px] min-w-[156px] rounded-[12px] box-border p-2 bg-white mx-1"
            >
              <div>
                <div className="rounded border-[1px] inline px-1 py-[0.8px] border-black font-medium text-[12px]">
                  INDEX
                </div>
                <div className="font-medium text-[14px]">BSE SENSEX</div>
              </div>
              <div className="w-[100%] px-1">
                <div className="font-medium text-[18px]">71,843.45</div>
                <div className=" flex items-center justify-between ">
                  <div className="px-3 py-1 bg-red-200 rounded-md text-red-900 font-medium">
                    1.76%
                  </div>
                  <div>
                    <img src={roundedadd} alt="addbutton" />
                  </div>
                </div>
              </div>
            </div>

            <div
              id="Infocontianer"
              className="border-[1px] flex flex-col items-start justify-between h-[162px] min-w-[156px] rounded-[12px] box-border p-2 bg-white mx-1"
            >
              <div>
                <div className="rounded border-[1px] inline px-1 py-[0.8px] border-black font-medium text-[12px]">
                  INDEX
                </div>
                <div className="font-medium text-[14px]">BSE SENSEX</div>
              </div>
              <div className="w-[100%] px-1">
                <div className="font-medium text-[18px]">71,843.45</div>
                <div className=" flex items-center justify-between ">
                  <div className="px-3 py-1 bg-green-200 rounded-md text-green-900 font-medium">
                    1.76%
                  </div>
                  <div>
                    <img src={roundedadd} alt="addbutton" />
                  </div>
                </div>
              </div>
            </div>

            <div
              id="Infocontianer"
              className="border-[1px] flex flex-col items-start justify-between h-[162px] min-w-[156px] rounded-[12px] box-border p-2 bg-white mx-1"
            >
              <div>
                <div className="rounded border-[1px] inline px-1 py-[0.8px] border-black font-medium text-[12px]">
                  INDEX
                </div>
                <div className="font-medium text-[14px]">BSE SENSEX</div>
              </div>
              <div className="w-[100%] px-1">
                <div className="font-medium text-[18px]">71,843.45</div>
                <div className=" flex items-center justify-between ">
                  <div className="px-3 py-1 bg-red-200 rounded-md text-red-900 font-medium">
                    1.76%
                  </div>
                  <div>
                    <img src={roundedadd} alt="addbutton" />
                  </div>
                </div>
              </div>
            </div>

            <div
              id="Infocontianer"
              className="border-[1px] flex flex-col items-start justify-between h-[162px] min-w-[156px] rounded-[12px] box-border p-2 bg-white mx-1"
            >
              <div>
                <div className="rounded border-[1px] inline px-1 py-[0.8px] border-black font-medium text-[12px]">
                  INDEX
                </div>
                <div className="font-medium text-[14px]">BSE SENSEX</div>
              </div>
              <div className="w-[100%] px-1">
                <div className="font-medium text-[18px]">71,843.45</div>
                <div className=" flex items-center justify-between ">
                  <div className="px-3 py-1 bg-red-200 rounded-md text-red-900 font-medium">
                    1.76%
                  </div>
                  <div>
                    <img src={roundedadd} alt="addbutton" />
                  </div>
                </div>
              </div>
            </div>

            <div
              id="Infocontianer"
              className="border-[1px] flex flex-col items-start justify-between h-[162px] min-w-[156px] rounded-[12px] box-border p-2 bg-white mx-1"
            >
              <div>
                <div className="rounded border-[1px] inline px-1 py-[0.8px] border-black font-medium text-[12px]">
                  INDEX
                </div>
                <div className="font-medium text-[14px]">BSE SENSEX</div>
              </div>
              <div className="w-[100%] px-1">
                <div className="font-medium text-[18px]">71,843.45</div>
                <div className=" flex items-center justify-between ">
                  <div className="px-3 py-1 bg-green-200 rounded-md text-green-900 font-medium">
                    1.76%
                  </div>
                  <div>
                    <img src={roundedadd} alt="addbutton" />
                  </div>
                </div>
              </div>
            </div>

            <div
              id="Infocontianer"
              className="border-[1px] flex flex-col items-start justify-between h-[162px] min-w-[156px] rounded-[12px] box-border p-2 bg-white mx-1"
            >
              <div>
                <div className="rounded border-[1px] inline px-1 py-[0.8px] border-black font-medium text-[12px]">
                  INDEX
                </div>
                <div className="font-medium text-[14px]">BSE SENSEX</div>
              </div>
              <div className="w-[100%] px-1">
                <div className="font-medium text-[18px]">71,843.45</div>
                <div className=" flex items-center justify-between ">
                  <div className="px-3 py-1 bg-red-200 rounded-md text-red-900 font-medium">
                    1.76%
                  </div>
                  <div>
                    <img src={roundedadd} alt="addbutton" />
                  </div>
                </div>
              </div>
            </div>

            <div
              id="Infocontianer"
              className="border-[1px] flex flex-col items-start justify-between h-[162px] min-w-[156px] rounded-[12px] box-border p-2 bg-white mx-1"
            >
              <div>
                <div className="rounded border-[1px] inline px-1 py-[0.8px] border-black font-medium text-[12px]">
                  INDEX
                </div>
                <div className="font-medium text-[14px]">BSE SENSEX</div>
              </div>
              <div className="w-[100%] px-1">
                <div className="font-medium text-[18px]">71,843.45</div>
                <div className=" flex items-center justify-between ">
                  <div className="px-3 py-1 bg-red-200 rounded-md text-red-900 font-medium">
                    1.76%
                  </div>
                  <div>
                    <img src={roundedadd} alt="addbutton" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="absolute top-[42%] right-[0%] lg:right-[-4%] rounded-full text-[25px] p-5 bg-blue-200 w-10 h-10 flex justify-center items-center z-[10]"
            onClick={() => handleScroll("right",scrollContainer2Ref)}
          >
            &gt;
          </button>
        </div>
        {/* 2nd scroll containers ends here here */}

        {/* footer link starts here */}
        <div className="mt-10 border-t-[2px]">
          <div className="py-6 px-3 ">
            <div className="flex items-center overflow-x-auto no-scrollbar font-medium whitespace-nowrap">
              <img className="w-[120px]" src={google} alt="googleimg" />
              <a className="ml-[28px]">Help</a>
              <span className="ml-[28px] ">Send feedback</span>
              <a className="ml-[28px]">Privacy</a>
              <a className="ml-[28px]">Terms</a>
              <a className="ml-[28px]">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterIndex;

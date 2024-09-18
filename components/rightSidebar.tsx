import { CgProfile } from "react-icons/cg";

export default function RightSideBar() {
  return (
    <div className="flex flex-col ">
      <div className=" text-white bg-gray-950  m-4 mt-6 flex flex-col   items-start border border-gray-950  rounded-lg">
        <div className="border-b border-gray  p-4 w-full text-2xl font-bold ">
          Your Stats
        </div>
        <div className="flex w-full pt-4 pb-4 items-left text-center justify-around">
          <div className="text-lg flex flex-col items-start">
            <p>Streak</p>
            <p>Contributions</p>
            <p>Rank</p>
          </div>
          <div className="font-semibold flex flex-col items-end text-lg">
            <p>7 days</p>
            <p>23 week</p>
            <p>Top 10%</p>
          </div>
        </div>
      </div>
      <div className=" text-white bg-gray-950 border-gray-950  m-4 flex flex-col justify-center items-start border rounded-lg">
        <div className="border-b border-gray  p-4 w-full text-2xl font-bold ">
          Who to follow
        </div>
        <div className="flex w-full flex-col pl-4 gap-4 pt-4 pb-4 items-left text-center justify-around">
          <div className="flex justify-between">
            <div className="flex gap-2">
            <CgProfile size={24}/>
            <p className="text-xl ">John doe</p>

            </div>
            <button className="mr-4 bg-gray-200 text-black rounded-full p w-20">Follow</button>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
            <CgProfile size={24}/>
            <p className="text-xl ">Alice smith</p>

            </div>
            <button className="mr-4 bg-gray-200 text-black rounded-full p w-20">Follow</button>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
            <CgProfile size={24}/>
            <p className="text-xl ">Mark manson</p>

            </div>
            <button className="mr-4 bg-gray-200  text-black rounded-full p w-20">Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
}

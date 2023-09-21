
import { HiMiniQueueList } from "react-icons/hi2"
import { BiSolidDownArrow } from "react-icons/bi"

interface CategorizationProps {

}

function Categorization({ }: CategorizationProps) {
    return (
        <div className="flex">
            <div className="flex max-w-[1300px] items-center justify-between w-full py-[10px] gap-[10px] mx-auto">
                <div className="flex relative justify-center items-center text-[#666] w-fit">
                    <HiMiniQueueList className="absolute left-[10px] cursor-default  pointer-events-none" />
                    <button className="border-[#ddd] border-[1px] rounded-[4px] w-[200px] py-[15px] hover:bg-[#fbfbfb]">All Categories</button>
                    <BiSolidDownArrow className="absolute right-[10px] text-[14px] cursor-default pointer-events-none" />
                </div>
                <ul className="flex gap-[25px] w-full p-[10px] text-[#666]">
                    <li className="cursor-pointer min-w-[100px] w-fit px-[15px] py-[7px] hover:text-[#1a1a1a]">Smartphones</li>
                    <li className="cursor-pointer min-w-[100px] w-fit px-[15px] py-[7px] hover:text-[#1a1a1a]">Tablets</li>
                    <li className="cursor-pointer min-w-[100px] w-fit px-[15px] py-[7px] hover:text-[#1a1a1a]">Fones</li>
                    <li className="cursor-pointer min-w-[100px] w-fit px-[15px] py-[7px] hover:text-[#1a1a1a]">Películas</li>
                </ul>
            </div>
        </div>
    )
}


export default Categorization
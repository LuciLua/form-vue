'use client'

import { useState } from "react"
import { AiOutlineSearch, AiOutlineDownCircle, AiOutlineLike } from "react-icons/ai"

interface SearchBarProps {
    placeholder: string
    icon: string
}


function SearchBar({ placeholder = "testeeee aa", icon = 'search' }: SearchBarProps) {

    const [productsSearched, setProductsSearched] = useState([])
    const [found, setFound] = useState([])

    function search(e) {

        const products = [{ name: 'smartphone', id: 1 }, { name: 'tablet', id: 2 }, { name: 'nokia t6i', id: 3 }]
        setProductsSearched(e)
        const searchTerm = e.toLowerCase()
        const foundProducts = products.filter((p) => p.name.includes(searchTerm));
      
        setFound(foundProducts.map((p) => p));
    }


    return (
        <div className="relative justify-center items-center flex w-full max-w-[700px]">
            <input
                type="text"
                placeholder={placeholder}
                className="text-inherit relative flex rounded-[3px] py-[8px] px-[15px] max-w-[700px] w-full outline-none text-[15px] border-[#ddd] border-[1px]"
                onChange={(e) => { search(e.target.value) }}
                spellCheck={false} />
            <div className="absolute right-[10px] text-[23px] text-[#aaa]">
                {icon === 'search' && <AiOutlineSearch />}
                {icon === 'search2' && <AiOutlineDownCircle />}
                {icon === 'search3' && <AiOutlineLike />}
            </div>
            {productsSearched.length > 0 &&
                <div className="text-inherit  absolute flex-col w-full max-w-[700px] min-h-[40px] h-fit bg-[#fbfbfbeb] border-[#ddd6] border-[1px] border-t-[0px] top-[40px] p-[10px] gap-[10px] flex rounded-br-[4px] rounded-bl-[4px] shadow-[0px_12px_12px_#0001] backdrop-blur-[2px]">
                    <p className="text-[#bbb]">Pesquisando por {productsSearched}...</p>
                    {found.map(f => {
                        return <a href="#" className=" px-[5px] border-[1px]  border-transparent outline-none focus:border-[1px] focus:border-[#6665] text-[#555] font-[500] h-[30px] w-full " key={f.id}>{f.name}</a>
                    })}
                </div>
            }
        </div>
    )
}

export default SearchBar
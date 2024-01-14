import { AiOutlineSearch } from "react-icons/ai"


const SearchBarDesign = () => {
    return (
        <div className="flex relative">
            <AiOutlineSearch className="absolute top-1" />
            <input type="text" className="border border-t-0 border-l-0 border-r-0 outline-none border-b-black mr-10 pl-10" placeholder="Enter name" />
        </div>
    )
}

export default SearchBarDesign;
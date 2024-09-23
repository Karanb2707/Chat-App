import { HiSearch } from "react-icons/hi";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
        <input type="text" placeholder="Search" className="input input-bordered rounded-full" />
        <button type="submit" className="btn btn-circle bg-sky-500">
           <HiSearch className="w-7 h-7 outline-none"/>
        </button>
    </form>
  )
}

export default SearchInput
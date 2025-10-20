

import {IoSearch} from 'react-icons/io5'
import { Filter } from 'lucide-react'

const Search = () => {
  return (
     <div className=" w-64 mx-2">
          <div className="relative">
            <IoSearch className=" w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"/> 
            <input 
            type="text"
            placeholder="Cari...../"
            className="w-full pl-10 pr-4 py-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200
            dark:border-slate-700 rounded-xl text-slate-800 dark:text-white placeholder-slate-500 focus:outline-none
            focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-slate-400
            hover:text-slate-600 dark:hover:text-slate-300">
              <Filter/>

            </button>

          

          </div>
        </div>

  )
}

export default Search

"use client";
import { Search, ChevronDown } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const [category, setCategory] = useState("Location");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "Location",
    "argentina", 
    "pparis" 
    
  ];

  return (
    <section className=" ">
      <form className="w-full shadow-lg flex items-stretch rounded-md border border-gray-300" >
        {/* Category Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="h-14 px-3 bg-[#e6e6e6] hover:bg-[#d5d5d5] text-[#0F1111] rounded-l-md flex items-center gap-1 whitespace-nowrap text-sm transition-colors"
          >
            <span className="text-xs">{category}</span>
            {/* <span className="sm:hidden text-xs">All</span>/ */}
            <ChevronDown className="w-3 h-3" />
          </button>

          {isDropdownOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsDropdownOpen(false)}
              />
              <div className="absolute top-full left-0 mt-1 bg-white border border-[#d5d5d5] rounded-md shadow-lg z-20 min-w-[200px]">
                {categories.map(cat => (
                  <button
                    type="button"
                    key={cat}
                    onClick={() => {
                      setCategory(cat);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left text-sm text-[#0F1111] hover:bg-[#f3f3f3] transition-colors first:rounded-t-md last:rounded-b-md"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Search Input */}
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search for an artisan"
          className="flex-1 h-14 px-4 bg-white text-black placeholder:text-[#565959] focus:outline-none text-sm border-0"
        />

        {/* Search Button */}
        <button
          type="submit"
          className="h-14 px-4 bg-dark-blue  transition-colors flex items-center justify-center rounded-r-md min-w-[45px]"
          aria-label="Search"
        >
          <Search className="w-5 h-5 text-white" />
        </button>
      </form>
    </section>
  );
};

export default SearchBar;

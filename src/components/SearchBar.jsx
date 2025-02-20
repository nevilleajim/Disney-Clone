const SearchBar = () => {
      return ( 
            <div className="relative flex items-center max-w-md mx-auto ml-85">

            <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 text-white py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/s"
                  >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                  </svg>
            </div>
            </div>
       );
}
 
export default SearchBar;
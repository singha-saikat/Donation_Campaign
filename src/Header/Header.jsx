import {  useState } from "react";
const Header = () => {
  const [input,setInput] = useState();
 const fetchData = (value) => {
  fetch('/donation.json')
  .then(res => res.json())
  .then(data => console.log(data))
 }
 const handleChange = (value) =>{
  setInput(value)
  fetchData(value)
 }
  
  return (
    <div className="h-[60vh]  flex flex-col justify-center mt-4 bg-[url('/public/Resources/Rectangle-4281.png')] bg-slate-200 bg-blend-screen">
      <h1 className="text-3xl text-center ">
        I Grow By Helping People In Need
      </h1>
      
       <div className="w-[40%] mx-auto mt-8">
       <form>   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#FF444A] focus:border-[#FF444A] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search here...." 
                 value={input}
                 onChange={(e) => handleChange(e.target.value)}

                
                required />
                <button type="submit" className="text-white absolute h-full right-0 bottom-0.6 bg-[#FF444A] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-md  text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>
       </div>
       

    </div>
    
  );
};

export default Header;
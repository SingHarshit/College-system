import Image from "next/image";
const TableSearch=()=>{
    return (
        <div className="w-full md:w-auto flex items-center h-10 text-l rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image 
            src="/Icons/search_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" 
            alt="Search Icon" 
            width={30} 
            height={30}
        />
        <input 
            type="text" 
            placeholder="Search.." 
            className="w-[200px] h-full p-0 text-left bg-transparent outline-none"
        />
    </div>
    
    )
}

export default TableSearch;
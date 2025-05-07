import Image from "next/image"

const Navbar=()=>{
    return (
        <div className="flex items-center justify-between">
           <div className="hidden md:flex items-center gap-2 text-l rounded-full ring-[1.5px] ring-gray-300 px-2 ml-[5px] mt-2">
  <Image src="/Icons/search_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" width={34} height={34} />
  <input
    type="text"
    placeholder="Search.."
    className="w-[200px] p-2 bg-transparent outline-none"
  />
</div>

        <div className="flex items-center gap-10 justify-end w-full">
            <div className="bg-white rounded-full w-7 h-7 gap-6 flex items-center justify-center cursor-pointer mr-5">
                <Image src="/Icons/mail_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" width={30} height={30}/>
            </div>
            <div className="bg-white rounded-full w-7 h-7 gap-4 flex items-center justify-center cursor-pointer realtive">
                <Image src="/Icons/brand_awareness_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" width={30} height={30}/>
                
                <div className="flex flex-col">
                    <span className="text-s leading-3 font-medium">Luciaa</span>
                    <span className="text-right text-[10px] text-orange-500 text-l">Admin</span>
                </div>
                <Image src="/Icons/group_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 (1).png" alt="" width={36} height={36} className="rounded-full"/>
    
        </div>

        </div>
        </div>
    )
}

export default Navbar;
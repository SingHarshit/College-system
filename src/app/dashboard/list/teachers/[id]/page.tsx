import BigCalendar from "@/components/BigCalendar"
import Performance from "@/components/Performance"
import Image from "next/image"
import Link from "next/link"

const SingleTeacherPage=()=>{
    return(
        <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
            <div className="w-full xl:w-2/3">
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="bg-blue-300 py-6 px-4 rounded-md flex-1 flex gap-4">
                    <div className="w-1/3">
                    <Image src="/Icons/home_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" width={144} height={144} className="w-36 h-36 rounded-full object-cover"/>
                    </div>
                    <div className="w-2/3 flex flex-col justify-between gap-4">
                    <h1 className="text-xl font-semibold ">Leonard synder</h1>
                    <p className="text-sm text-gray-500">
                        Lorem ipsum dolor
                    </p>
                    <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                        <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                            <Image src="/Icons/bloodtype_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" width={14} height={14} />
                            <span>A+</span>
                        </div>
                        <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                            <Image src="/Icons/calendar_month_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" width={14} height={14} />
                            <span>21 june 2025</span>
                        </div>
                        <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                            <Image src="/Icons/call_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" width={14} height={14} />
                            <span>+91 868575437</span>
                        </div>
                        <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                            <Image src="/Icons/settings_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" width={14} height={14} />
                            <span>hgf-</span>
                        </div>
                    </div>

                    </div>
                </div>
                <div className="flex-1 flex gap-4 justify-between flex-wrap">
                    <div className="bg-white p-4 rounded-md flex gap-4 w-full xl:w-[45%] 2xl:w-[48%] md:w-[48%] xl">
                        <Image src="/Icons/person_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" width={14} height={14} className="w-6 h-6"/>
                        <div className="">
                            <h1 className="text-xl font-semibold">90%</h1>
                            <span className="text-sm text-gray-400">lessons</span>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-md flex gap-4 w-full xl:w-[45%] 2xl:w-[48%]">
                        <Image src="/Icons/person_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" width={14} height={14} className="w-6 h-6"/>
                        <div className="">
                            <h1 className="text-xl font-semibold">90%</h1>
                            <span className="text-sm text-gray-400">lessons</span>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-md flex gap-4 w-full xl:w-[45%] 2xl:w-[48%]">
                        <Image src="/Icons/person_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" width={14} height={14} className="w-6 h-6"/>
                        <div className="">
                            <h1 className="text-xl font-semibold">90%</h1>
                            <span className="text-sm text-gray-400">lessons</span>
                        </div>
                    </div> <div className="bg-white p-4 rounded-md flex gap-4 w-full xl:w-[45%] 2xl:w-[48%]">
                        <Image src="/Icons/person_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" width={14} height={14} className="w-6 h-6"/>
                        <div className="">
                            <h1 className="text-xl font-semibold">90%</h1>
                            <span className="text-sm text-gray-400">lessons</span>
                        </div>
                    </div>
                </div>
                
            </div>
           <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
            <h1>Teacher Schedule</h1>
            //<BigCalendar/>
           </div>
            </div>
            <div className="w-full xl:w-1/3 flex flex-col gap-4">
            <div className="bg-white p-4 rounded-md">
                <h1 className="text-xl font-semibold">shortcuts</h1>
                <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
                    <Link className="p-3 rounded-md bg-blue-200" href="\" >Teacher classes</Link>
                    <Link className="p-3 rounded-md bg-blue-200" href="\" >Teacher classes</Link>
                    <Link className="p-3 rounded-md bg-blue-200" href="\" >Teacher classes</Link>
                    <Link className="p-3 rounded-md bg-blue-200" href="\" >Teacher classes</Link>
                </div>
            </div>
            <Performance/>
            </div>
        </div>
    )
}
export default SingleTeacherPage
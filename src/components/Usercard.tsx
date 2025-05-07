import Image from "next/image";

const Usercard=({type}:{type:string})=>{
    return (
        <div className="rounded-2xl odd:bg-indigo-300 even:bg-yellow-200 p-4 flex-1">
            <div className="flex justify-between items-center">
                <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">2024/25</span>
                <Image src="/Icons/add_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" width={30} height={30}/>
            </div>
            <h1 className="text-2xl font-semiboldmy-4">1,234</h1>
            <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
        </div>
    )

}

export default Usercard;
// lamasky:"#C3EBFA",
// lamasky-light:"#EDF9FD",
// lamapurple:"#CFCEFF",
// purplelight:#F1F0FF,
// yellow:#FAE27C,
// yellow-light:#FEFCE8,

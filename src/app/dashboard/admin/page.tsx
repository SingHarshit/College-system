import Announcement from "@/components/Announcement"
import AttendenceChart from "@/components/Attendence"
import Countcharts from "@/components/Countcharts"
import EventCalendar from "@/components/EventCalendar"
import Financechart from "@/components/Finance"
import Usercard from "@/components/Usercard"

const AdminPage=()=>{
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-col">
        <div className="w-full lg:w-2/3 flex flex-col gap-8"></div>
        <div className="flex gap-4 justify-between flex-wrap">
            <Usercard type="student"/>
            <Usercard type="Teacher"/>
            <Usercard type="Parent"/>
            <Usercard type="staff"/>
        </div>
        <div className="flex gap-4 flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 h-[450px]"><Countcharts/></div>
            <div className="w-full lg:w-2/3 h-[450px]"><AttendenceChart/></div>
            <div className="w-full lg:w-1/3 flex flex-col gap-8"><EventCalendar/><Announcement/></div>
        </div>
        <div className="w-full h-[500px]"><Financechart/></div>
    
        </div>
    )
}
export default AdminPage
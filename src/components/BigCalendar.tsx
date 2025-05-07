"use client"


//import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/Data'
import { useState } from 'react'


//const localizer = momentLocalizer(moment)

const BigCalendar = () => {
    // const [view,setView]= useState<view>(ViewTransition.WORK_WEEK)
    // const handleOnChangeView=(selectedView:View)=>{

    // };

    return (
        <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week","day"]}
      view={view}
      style={{ height:" 99% "}}
      onView={handleOnChangeView}
      min={new Date(2025,1,0,8,0,0)}
      max={new Date(2025,1,0,17,0,0)}
    />
    );
};
export default BigCalendar
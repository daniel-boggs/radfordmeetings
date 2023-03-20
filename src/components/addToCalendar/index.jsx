import React from "react";
import { BsCalendarWeek } from 'react-icons/bs'
import "./index.scss";
import { createEvent } from 'ics';
import { saveAs } from "file-saver";

export default function AddToCalendar(props) {
  // Set up event schedule details
  const downloadICS = () => {
    createEvent({
      title: props.title,
      description: props.description,
      location: props.location,
      url: 'https://radfordmeetings.com',
      busyStatus: 'FREE',
      start: props.dateTime,
      duration: { minutes: 60 }
    }, (error, value) => {
      if (error) {
        console.log(error)
      }
      console.log(value);
    
      const blob = new Blob([value], { type: "text/plain;charset=utf-8" });
      saveAs(blob, "event-schedule.ics");
    })
  }

  return (
        <button className="add-cal-btn" onClick={downloadICS}>
            <BsCalendarWeek className='cal-icon' /><span className='calendar-link'>Add to Calendar</span>
        </button>
  );
}

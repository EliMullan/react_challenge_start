import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitleChange = e => {
    setTitle(e.target.value);
  }

  const handleContactChange = e => {
    setContact(e.target.value);
  }

  const handleDateChange = e => {
    setDate(e.target.value);
  }

  const handleTimeChange = e => {
    setTime(e.target.value);
  }

  console.log(contacts)

    return (
    <form onSubmit={handleSubmit}>
      <label>Contact</label>
      <ContactPicker 
      contacts={contacts} 
      onChange={handleContactChange}
      />
       <label>Title</label>
      <input 
      type='text'
       value={title}
       onChange={handleTitleChange}
      />
      <label>Date</label>
      <input 
      type='date'
      value={date}
      min={getTodayString}
      onChange={handleDateChange}
      /> 
      <label>Time</label>
      <input 
      type='time'
      value={time}
      onChange={handleTimeChange} />
      <input  
      type='submit' 
      />

    </form>
  );
};

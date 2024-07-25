
import React, { useState } from 'react';
import './Calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const renderDays = () => 
    {
    const days = [];
    for (let i = 0; i < firstDayOfMonth.getDay(); i++) 
      {
      days.push(<div className="calendar-day empty" key={`empty-${i}`} />);
    }
    for (let day = 1; day <= lastDayOfMonth.getDate(); day++) 
      {
      days.push(<div className="calendar-day" key={day}>{day}</div>);
    }
    return days;
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>Previous</button>
        <h2>
          {
            currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()
          }
        </h2>
        <button onClick={handleNextMonth}>Next</button>
      </div>
      <div className="calendar-grid">
        {daysOfWeek.map((day) => (
          <div className="calendar-day-header" key={day}>
            {day}
          </div>
        ))}
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendar;

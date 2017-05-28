import React from 'react';
import './dateIcon.scss';

const DateIcon = ({day, month, year, day2, month2, year2}) => {

  const Date = ({day, month, year, decorator}) => {
    const className = decorator ? 'date2' : 'date';
    return (
      <div >
        <span className="year">{year}</span>
        <span className="day">{day}</span>
        <span className="month">{month}</span>
      </div>
    )
  }

  const decorator = day2 ? <Date day={day2} month={month2} year={year2} decorator/> : '';

  return (
    <div className="date-icon">
      <Date day={day} month={month} year={year} />
      {decorator}
    </div>
  )
}

export default DateIcon;

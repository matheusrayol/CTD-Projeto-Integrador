import { Calendar } from 'react-calendar'
import { useState } from 'react'
import 'react-calendar/dist/Calendar.css'

export function SingleCalendar(props) {
  const { selectedRange, onSelectedRange } = props

  const handleRangeChange = range => {
    onSelectedRange(range)
  }

  const minDate = new Date()

  const disabledDates = [
    new Date(2023, 3, 8),  // 1º de abril de 2023
    new Date(2023, 3, 9),  // 1º de maio de 2023
    new Date(2023, 3, 10)   // 1º de junho de 2023
  ];

  function tileDisabled({ date, view }) {
    return disabledDates.some(disabledDate =>
      disabledDate.getDate() === date.getDate() &&
      disabledDate.getMonth() === date.getMonth() &&
      disabledDate.getFullYear() === date.getFullYear()
    );
  }

  return (
    <Calendar
      id="SingleCalendar"
      onChange={handleRangeChange}
      value={selectedRange}
      selectRange={true}
      minDate={minDate}
      tileDisabled={tileDisabled}
    />
  )
}

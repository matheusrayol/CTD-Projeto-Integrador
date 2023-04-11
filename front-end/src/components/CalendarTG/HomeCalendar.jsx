import { Calendar } from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

export function HomeCalendar(props) {
  const { selectedRange, onSelectedRange } = props

  const handleDateChange = range => {
    onSelectedRange(range)
  }

  const minDate = new Date()

  return (
    <Calendar
      id="CalendarHome"
      onChange={handleDateChange}
      value={selectedRange}
      selectRange={true}
      minDate={minDate}
    />
  )
}

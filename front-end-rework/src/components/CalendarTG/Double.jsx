import { Calendar } from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

export function DoubleCalendar(props) {
  const { selectedRange, onSelectedData } = props

  const handleDateChange = range => {
    onSelectedData(range)
  }

  const minDate = new Date()

  return (
    <Calendar
      id="DoubleCalendar"
      onChange={handleDateChange}
      value={selectedRange}
      selectRange={true}
      minDate={minDate}
      showDoubleView={true}
    />
  )
}

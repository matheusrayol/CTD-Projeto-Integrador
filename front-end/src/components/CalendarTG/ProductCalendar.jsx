import { Calendar } from 'react-calendar'
import { useEffect, useState } from 'react'
import 'react-calendar/dist/Calendar.css'

export function ProductCalendar(props) {

  const [isViewportLessThan1200, setIsViewportLessThan1200] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsViewportLessThan1200(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);

    // Limpa o listener do evento quando o componente é desmontado
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const { selectedRange, onSelectedData, onDisabledDate } = props
  const minDate = new Date()

  function isDateBlocked(date, onDisabledDate) {
    for (let count = 0; count < onDisabledDate.length; count++) {
      const { dateBegin, dateEnd } = onDisabledDate[count]
      if (date >= dateBegin && date <= dateEnd) {
        return true
      }
    }
    return false
  }

  function handleDateChange(date) {
    onSelectedData(date)
    localStorage.setItem('latestDateRange', JSON.stringify(date))
    localStorage.setItem('startDate', date[0])
    localStorage.setItem('endDate', date[1])
  }

  return (
    <Calendar
      id='ProductCalendar'
      showDoubleView={!isViewportLessThan1200}
      onChange={handleDateChange}
      value={selectedRange}
      selectRange={true}
      minDate={minDate}
      tileDisabled={({ date }) => isDateBlocked(date, onDisabledDate)}
      events={onDisabledDate}
      defaultView='month'
    />
  )
}

import { useRef, useState } from 'react'
import { DateRangePicker } from 'react-date-range'

import format from 'date-fns/format'
import { addDays } from 'date-fns'
import './reserveCalendar.scss'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const DateRangePickerComp3 = () => {
  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ])

  const minDate = new Date()

  // get the target element to toggle
  const refOne = useRef(null)

  return (
    <div className="calendarWrap3">
      <input
        value={`${format(range[0].startDate, 'dd/MM/yyyy')} <--> ${format(
          range[0].endDate,
          'dd/MM/yyyy'
        )}`}
        readOnly
        className="inputBox3"
      />

      <div ref={refOne}>
        <DateRangePicker
          onChange={item => setRange([item.selection])}
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          ranges={range}
          months={2}
          direction="horizontal"
          className="calendarElement3"
          minDate={minDate}
        />
      </div>
    </div>
  )
}

export default DateRangePickerComp3

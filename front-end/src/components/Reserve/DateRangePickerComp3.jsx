import { useEffect, useRef, useState } from 'react'
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

  // open close
  const [open, setOpen] = useState(false)

  // get the target element to toggle
  const refOne = useRef(null)

  useEffect(() => {
    // event listeners
    document.addEventListener('keydown', hideOnEscape, true)
    document.addEventListener('click', hideOnClickOutside, true)
  }, [])

  // hide dropdown on ESC press
  const hideOnEscape = e => {
    // console.log(e.key)
    if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  // Hide dropdown on outside click
  const hideOnClickOutside = e => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false)
    }
  }

  return (
    <div className="calendarWrap3">
      <input
        value={`${format(range[0].startDate, 'dd/MM/yyyy')} <--> ${format(
          range[0].endDate,
          'dd/MM/yyyy'
        )}`}
        readOnly
        className="inputBox3"
        onClick={() => setOpen(open => !open)}
      />

      <div ref={refOne}>
        {open && (
          <DateRangePicker
            onChange={item => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction="horizontal"
            className="calendarElement3"
          />
        )}
      </div>
    </div>
  )
}

export default DateRangePickerComp3

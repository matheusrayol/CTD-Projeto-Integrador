import { useEffect, useRef, useState } from 'react'
import { DateRangePicker } from 'react-date-range'
import format from 'date-fns/format'
import { addDays } from 'date-fns'
import './ProductCalendar.scss'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const DateRangePickerComp = props => {
  const { productId } = props
  const [productsReservations, setProductsReservations] = useState([])
  useEffect(() => {
    fetch(`/reservation/product/${productId}`).then(res => {
      res.json().then(data => {
        setProductsReservations(data)
        console.log(data)
      })
    })
  }, [productId])

  useEffect(() => {
    productsReservations.map(dates => console.log(dates.dateBegin))
  })

  // estado dos campos de data
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 2),
      key: 'selection'
    }
  ])

  const refOne = useRef(null)

  const minDate = new Date()

  const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]

  const locale = {
    localize: {
      day: n => days[n],
      month: n => months[n]
    },
    formatLong: {
      date: () => 'dd/mm/yyyy'
    }
  }

  return (
    <div className="calendarWrap2" id="calendarWrap2">
      <input
        value={`${format(range[0].startDate, 'dd/MM/yyyy')} <--> ${format(
          range[0].endDate,
          'dd/MM/yyyy'
        )}`}
        readOnly
        className="inputBox2"
        id="inputBox2"
      />

      <div ref={refOne}>
        {
          <DateRangePicker
            locale={locale}
            onChange={item => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction="horizontal"
            className="calendarElement2"
            minDate={minDate}
            id="calendarElement2"
            excludeDates={[new Date(2023, 4, 10)]}
          />
        }
      </div>
    </div>
  )
}

export default DateRangePickerComp

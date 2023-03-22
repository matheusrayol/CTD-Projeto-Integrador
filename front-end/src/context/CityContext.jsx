import { createContext, useEffect, useState } from 'react'

export const CityContext = createContext()

export const CityProvider = ({ children }) => {
  const [cities, setCities] = useState([])
  const [selectedCity, setselectedCity] = useState('')
  const [cityId, setCityId] = useState()

  useEffect(() => {
    fetch('/city/all').then(response => {
      if (response.ok) {
        response.json().then(data => {
          console.log(data)
          setCities(data)
        })
      }
    })
  }, [])

  return (
    <CityContext.Provider
      value={{
        cities: cities,
        setCities: setCities,
        selectedCity: selectedCity,
        setselectedCity: setselectedCity,
        cityId: cityId,
        setCityId: setCityId
      }}
    >
      {children}
    </CityContext.Provider>
  )
}

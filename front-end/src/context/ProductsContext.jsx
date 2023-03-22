/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from 'react'
import { CategoryContext } from './CategoryContext'
import { CityContext } from './CityContext'

export const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
  const { selectedCategory, categoryId } = useContext(CategoryContext)
  const { selectedCity, cityId } = useContext(CityContext)

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [productsByCategory, setProductsByCategory] = useState()
  const [productsByCity, setProductsByCity] = useState()

  useEffect(() => {
    fetch('/product/all').then(response => {
      response.json().then(data => {
        console.log(data)
        setProducts(data)
      })
    })
  }, [])

  useEffect(() => {
    console.log('fetch')
    fetch(`category/${categoryId}`).then(response => {
      if (response.ok) {
        response.json().then(data => {
          console.log('productsByCategory: ', data)
          // setFilteredProducts([data]);
          setProductsByCategory(data)
          setProductsByCity()
        })
      }
    })
  }, [categoryId])

  return (
    <ProductsContext.Provider
      value={{
        products: products,
        setProducts: setProducts,
        productsByCategory: productsByCategory,
        setProductsByCategory: setProductsByCategory,
        productsByCity: productsByCity,
        setProductsByCity: setProductsByCity
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

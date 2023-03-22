import { createContext, useEffect, useState } from 'react'

export const CategoryContext = createContext()

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState()
  const [categoryId, setCategoryId] = useState()

  useEffect(() => {
    fetch('/category/all').then(response => {
      if (response.ok) {
        response.json().then(data => {
          // console.log("fetch categorias: ", data);
          setCategories(data)
        })
      }
    })
  }, [])

  return (
    <CategoryContext.Provider
      value={{
        categories: categories,
        setCategories: setCategories,
        selectedCategory: selectedCategory,
        setSelectedCategory: setSelectedCategory,
        categoryId: categoryId,
        setCategoryId: setCategoryId
      }}
    >
      {children}
    </CategoryContext.Provider>
  )
}

import { useState, createContext, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchProducts } from "../store/products"


export const SearchContext = createContext()

export const SearchFilter = (props) => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const products = Object.values(state?.products)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredProducts, setFilteredProducts] = useState(products)


  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  useEffect(() => {
    if (filteredProducts.length === 0) setFilteredProducts(products)
  }, [products])

  return (
    <SearchContext.Provider
      value={{
        products,
        filteredProducts,
        setFilteredProducts,
        searchQuery,
        setSearchQuery,
      }}>
      {props.children}
    </SearchContext.Provider>
  )
}

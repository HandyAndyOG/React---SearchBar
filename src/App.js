import React, {useEffect, useState} from 'react'
import SearchBar from './SearchBar/SearchBar'
import Loader from './media/loading.gif'

const App = () => {

   const [productsState, setProductsState] = useState([])

   useEffect(() => {

      fetch('https://fakestoreapi.com/products')
         .then(res=>res.json())
         .then((productsArray) => {
            const newProductsState = productsArray.map((product) => {
               return product.title
            })
            setProductsState(newProductsState)
         })
   }, [])

   const hasProducts = productsState.length > 0

    return (
     <div>
        {hasProducts ? <SearchBar products={productsState}/> : <img src={Loader} alt="loading..." />}
        

     </div>
    )  
  }
  
  export default App
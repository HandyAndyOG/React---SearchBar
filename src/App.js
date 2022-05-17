import React, {useEffect, useState} from 'react'
import SearchBar from './SearchBar/SearchBar'
import Loader from './media/loading.gif'

const App = () => {

   const [productsState, setProductsState] = useState([])

   useEffect(() => {
      setTimeout(() => {
         setProductsState([
            'shampoo',
            'body wash',
            'face wash',
            'soap bar',
            'conditioner',
         ])
      }, 2000)
   }, [])

   const hasProducts = productsState.length > 0

    return (
     <div>
        {hasProducts ? <SearchBar products={productsState}/> : <img src={Loader} alt="loading..." />}
        

     </div>
    )  
  }
  
  export default App
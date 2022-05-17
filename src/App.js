import React from 'react'
import SearchBar from './SearchBar/SearchBar'

const products = [
   'shampoo',
   'body wash',
   'face wash',
   'soap bar',
   'conditioner'
]

const App = () => {
    return (
     <div>
        <SearchBar products={products}/>
     </div>
    )  
  }
  
  export default App
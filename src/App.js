import React from 'react'
import CountButton from './CountButton/countbutton'
import SearchBar from './SearchBar/SearchBar'

const App = () => {
    return (
     <div>
        <CountButton incrementBy={5} buttonColour = {"blue"} />
        <CountButton incrementBy={2} buttonColour = {"purple"}/>
        <SearchBar />
     </div>
    )  
  }
  
  export default App
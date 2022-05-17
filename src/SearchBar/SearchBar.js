import React, {useState} from 'react'
import './SearchBar.css'

const SearchBar = () => {

    const clearInput = () => {
        setSearchValue('')
    }

    const [searchValue, setSearchValue] = useState('')

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const shouldDisplayButton = searchValue.length > 0
        
    return(
    <div>
        <input onChange={handleInputChange} type="text" value={searchValue} placeholder="search..." />

        {shouldDisplayButton && <button id='clearButton' onClick={clearInput} >clear</button>}
        
    </div>
    )
}

export default SearchBar
import React, {useState} from 'react'
import './SearchBar.css'

const products = [
    'shampoo',
    'body wash',
    'face wash',
    'soap bar',
    'conditioner'
]

const SearchBar = () => {
    // Enabling the user to type into the searchbar by clearing it with an empty string //
    const clearInput = () => {
        setSearchValue('')
    }

    // Storing the search value in the state for later usecases //
    const [searchValue, setSearchValue] = useState('')
    
    // Typing into the searchbar cause the 'onChange' event to be triggered. This then sets whatever is typed into the searchbar as the new value and stores it in the state (useState). //
    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    // This function is used with conditional rendering below to check if there is a string stored in the 'searchValue", if true, it displays the 'clear button'. //
    const shouldDisplayButton = searchValue.length > 0
    
    // Filter through the products array (above) with the 'searchValue' and returning items that match'
    const filterSearchbar = products.filter((product) => {
        return product.includes(searchValue)
    })

    // bable and JSX utlised by React to render the below as html //
    return(
    <div>
        <input onChange={handleInputChange} type="text" value={searchValue} placeholder="search..." />
        {shouldDisplayButton && <button id='clearButton' onClick={clearInput} >clear</button>}
        <ul>
            {filterSearchbar.map((product) => {
                return <li key={product}>{product}</li>
            })}
        </ul>
    </div>
    )
}

export default SearchBar
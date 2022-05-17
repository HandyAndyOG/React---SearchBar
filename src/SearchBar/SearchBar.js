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

    const clearInput = () => {
        setSearchValue('')
    }

    const [searchValue, setSearchValue] = useState('')

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const shouldDisplayButton = searchValue.length > 0
    
    const filterSearchbar = products.filter((product) => {
        return product.includes(searchValue)
    })

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
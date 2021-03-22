
import React from 'react'
import './search-box.styles.css'

export const SearchBox = props => (
    <div className="search">
        <input type="text" className="text" onChange = {props.handleSearch} placeholder="search monsters"></input>
        {/* value={props.searchField} */}
    </div>
)
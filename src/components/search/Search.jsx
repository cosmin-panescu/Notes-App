import React from 'react'
import { MdSearch } from 'react-icons/md'
import './Search.scss'

const Search = ({ handleSearchNote }) => {
    return (
        <div className="search">
            <MdSearch className='search-note' size='1.3em' />
            <input
                type="text"
                placeholder='search a note...'
                onChange={e => handleSearchNote(e.target.value)}
            />
        </div>
    )
}

export default Search
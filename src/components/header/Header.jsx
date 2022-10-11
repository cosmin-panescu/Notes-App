import React from 'react'
import './Header.scss'

const Header = ({ handleDarkMode }) => {
    return (
        <div className="header">
            <h1>Notes</h1>
            <button
                className='btn'
                onClick={() => handleDarkMode((previousDarkMode) => !previousDarkMode)}
            >
                Toggle
            </button>
        </div>
    )
}

export default Header
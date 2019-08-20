import React from 'react'
import propTypes from 'prop-types'

const Header = ({ title }) => (
    <header>
        <h1>{title}</h1>
    </header>
)

Header.propTypes = {
    title: propTypes.string
}

export default Header

import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import getFont from '../../utils/font'

const Title = styled.h1`
    font: ${getFont({ size: 20, weight: 600 })};
`

const Header = ({ title }) => (
    <header>
        <Title>{title}</Title>
    </header>
)

Header.propTypes = {
    title: propTypes.string
}

export default Header

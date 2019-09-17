import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import getFont from '../../utils/font'
import { grey } from '../../utils/palette'
// import calculateFare from '../../utils/calculate-fare'

const formatCost = price => `$${price}`

const Container = styled.div`
    width: 100%;
    border: 1px solid ${grey};
    border-right-width: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Total = styled.span`
    font: ${getFont({ size: 20, weight: 600, lineHeight: 1.5 })};
`

const FareEstimate = ({ startLocation, endLocation, rideType }) => {
    const fareCost = '0.00'
    // calculateFare(startLocation, endLocation, rideType)

    return (
        <Container>
            <Total>{formatCost(fareCost)}</Total>
        </Container>
    )
}

FareEstimate.propTypes = {
    startLocation: propTypes.string,
    endLocation: propTypes.string,
    rideType: propTypes.string
}

export default FareEstimate

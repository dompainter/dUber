import React from 'react'
import propTypes from 'prop-types'
// import calculateFare from '../../utils/calculate-fare'

const formatCost = price => `$${price}`

const FareEstimate = ({ startLocation, endLocation, rideType }) => {
    const fareCost = 0
    // calculateFare(startLocation, endLocation, rideType)

    return (
        <>
            {formatCost(fareCost)}
        </>
    )
}

FareEstimate.propTypes = {
    startLocation: propTypes.string,
    endLocation: propTypes.string,
    rideType: propTypes.string
}

export default FareEstimate

import { getRideType } from '../common/ride-types'

/**
 * Function to calculate the price of a fare
 *
 * @param {startLocation} startLocation - location ride starts at
 * @param {endLocation} endLocation - location ride ends at
 * @param {rideType} rideType - type of ride for journey
 * @returns {string} calculated fare cost
 */
export default function calculateFare (startLocation, endLocation, rideType) {
    const desiredRideType = getRideType(rideType)

    const distance = startLocation + endLocation
    const surcharge = desiredRideType ? desiredRideType.surcharge : null

    return surcharge + distance
}

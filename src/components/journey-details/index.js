import React, { useEffect, useState } from 'react'
import { getAllRideTypes, getRideType } from '../../common/ride-types'

import FareEstimate from '../fare-estimate'

const JourneyDetails = () => {
    const rideTypes = getAllRideTypes()
    const [isNumSeatsVisible, setIsNumSeatsVisible] = useState(false)
    const [rideType, setRideType] = useState(rideTypes[0])

    useEffect(() => {
        const { canSetNumSeats } = getRideType(rideType.id)
        setIsNumSeatsVisible(canSetNumSeats)
    }, [rideType])

    const handleSelectChange = e => setRideType(getRideType(e.target.value))

    return (
        <form>
            <input type="text" id="startLocation" placeholder="Start Location" />
            <input type="text" id="endLocation" placeholder="End Location" />
            <select name="rideType" id="rideType" onChange={handleSelectChange} value={rideType.id}>
                {rideTypes.map(({ id, name: rideTypeName }) => (
                    <option key={id} value={id}>
                        {rideTypeName}
                    </option>
                ))}
            </select>
            {isNumSeatsVisible && (
                <>
                    <input type="radio" id="seatsOne" />
                    <label>1</label>
                    <input type="radio" id="seatsTwo" />
                    <label>2</label>
                </>
            )}
            <FareEstimate />
            <button type="submit">Submit</button>
        </form>
    )
}

export default JourneyDetails

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { getAllRideTypes, getRideType } from '../../common/ride-types'
import getFont from '../../utils/font'
import { chelseaBlue, grey, white, black } from '../../utils/palette'

import FareEstimate from '../fare-estimate'

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 20px;
`

const TextInput = styled.input`
    font: ${getFont()};
    margin-bottom: ${props => props.bottomMargin ? '10px' : 0};
    height: 40px;
    padding: 0 10px;
    background-color: ${grey};
    border: 0;

    ::placeholder {
        color: ${black};
    }
`

const SubmitButton = styled.button`
    background-color: ${chelseaBlue};
    color: ${white};
    border: 0;
    min-width: 40px;
    font: ${getFont({ size: 20 })};
    padding: 0;
`

const ConfirmationContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px 20px;
    height: 40px;
`

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
        <StyledForm>
            <InputContainer>
                <TextInput type="text" id="startLocation" placeholder="Start Location" bottomMargin />
                <TextInput type="text" id="endLocation" placeholder="End Location" />
            </InputContainer>

            <InputContainer>
                <select name="rideType" id="rideType" onChange={handleSelectChange} value={rideType.id}>
                    {rideTypes.map(({ id, name: rideTypeName }) => (
                        <option key={id} value={id}>
                            {rideTypeName}
                        </option>
                    ))}
                </select>
            </InputContainer>

            {isNumSeatsVisible && (
                <InputContainer>
                    <input type="radio" id="seatsOne" />
                    <label>1</label>
                    <input type="radio" id="seatsTwo" />
                    <label>2</label>
                </InputContainer>
            )}

            <ConfirmationContainer>
                <FareEstimate />
                <SubmitButton type="submit">
                    <i className="fas fa-chevron-right"></i>
                </SubmitButton>
            </ConfirmationContainer>
        </StyledForm>
    )
}

export default JourneyDetails

import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

import { getAllRideTypes, getRideType } from '../../common/ride-types'
import getFont from '../../utils/font'
import { chelseaBlue, grey, white, black } from '../../utils/palette'

import FareEstimate from '../fare-estimate'

const baseInputStyle = css`
    font: ${getFont()};
    height: 40px;
    padding: 0 10px;
    background-color: ${grey};
    border: 0;
    border-radius: 5px;
    box-sizing: border-box;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 20px;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 0;
`

const TextInput = styled.input`
    ${baseInputStyle}
    margin-bottom: ${props => props.bottomMargin ? '10px' : 0};    

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

const StyledSelect = styled.select`
    ${baseInputStyle}

    appearance: none;
`

const Heading = styled.h3`
    margin: 0;
    padding-top: 20px;
`

const SeatSelectContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
`

const SeatButton = styled.button`
    font: ${getFont({ size: 20, weight: 600, lineHeight: 1.5 })};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding: 10px 6px;
    transition: all .2s ease-in;
    background-color: ${props => props.selected ? chelseaBlue : 'none'}
    color: ${props => props.selected ? white : black}
    
    &:hover, &:focus, &:active {
        outline: 0;
        border: 1px solid ${grey};
    }
`

const JourneyDetails = () => {
    const rideTypes = getAllRideTypes()
    const [isNumSeatsVisible, setIsNumSeatsVisible] = useState(false)
    const [rideTypeId, setRideTypeId] = useState(rideTypes[1].id)
    const [numSeats, setNumSeats] = useState(0)

    useEffect(() => {
        const rideType = getRideType(rideTypeId)
        setIsNumSeatsVisible(rideType ? rideType.canSetNumSeats : false)
    }, [rideTypeId])

    const handleSelectChange = e => {
        const selectedRideType = getRideType(e.target.value)

        setRideTypeId(selectedRideType ? selectedRideType.id : undefined)
    }

    const handleSeatSelect = e => {
        e.preventDefault()
        setNumSeats(e.target.value)
    }

    return (
        <StyledForm>
            <InputContainer>
                <TextInput type="text" id="startLocation" placeholder="Start Location" bottomMargin />
                <TextInput type="text" id="endLocation" placeholder="End Location" />
            </InputContainer>

            <Heading>Ride Type</Heading>
            <InputContainer>
                <StyledSelect name="rideType" id="rideType" onChange={handleSelectChange} value={rideTypeId}>
                    {rideTypes.map(({ id, name: rideTypeName }) => (
                        <option key={id} value={id}>
                            {rideTypeName}
                        </option>
                    ))}
                </StyledSelect>
            </InputContainer>

            {isNumSeatsVisible && (
                <>
                    <Heading>Number of Seats</Heading>
                    <SeatSelectContainer>
                        <SeatButton value="1" selected={numSeats === '1'} onClick={handleSeatSelect}>1</SeatButton>
                        <SeatButton value="2" selected={numSeats === '2'} onClick={handleSeatSelect}>2</SeatButton>
                        <SeatButton value="3" selected={numSeats === '3'} onClick={handleSeatSelect}>3</SeatButton>
                        <SeatButton value="4" selected={numSeats === '4'} onClick={handleSeatSelect}>4</SeatButton>
                        <input type="hidden" id="numSeats" name="numSeats" value={numSeats} />
                    </SeatSelectContainer>
                </>
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

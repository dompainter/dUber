import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Autocomplete from 'react-autocomplete'

import { getAllRideTypes, getRideType } from '../../common/ride-types'
import getFont from '../../utils/font'
import { chelseaBlue, grey, white, black } from '../../utils/palette'
import search from '../../utils/search'

import FareEstimate from '../fare-estimate'

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    height: 100%;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 0;
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
    height: 40px;
    position: absolute;
    bottom: 10px;
    width: 100%;
`

const StyledSelect = styled.select`
    font: ${getFont()};
    height: 40px;
    padding: 0 10px;
    background-color: ${grey};
    border: 0;
    border-radius: 5px;
    box-sizing: border-box;
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

const LocationItem = styled.div`
    font: ${getFont({ size: 16, lineHeight: 1.5 })};
    background-color: ${props => props.isHighlighted ? grey : white};
    color: black;
    transition: all .2s ease-in;
    cursor: pointer;
    padding: 3px 10px;
`

const inputStyle = {
    font: '14px Heebo, sans-serif', // Doesn't enjoy using getFont with an inline style
    height: '40px',
    padding: '0 10px',
    backgroundColor: grey,
    border: 0,
    borderRadius: '5px',
    boxSizing: 'border-box',
    width: '100%',
    outline: 0
}

const JourneyDetails = () => {
    const rideTypes = getAllRideTypes()
    const [isNumSeatsVisible, setIsNumSeatsVisible] = useState(false)
    const [rideTypeId, setRideTypeId] = useState(rideTypes[1].id)
    const [numSeats, setNumSeats] = useState(0)
    const [startLocation, setStartLocation] = useState()
    const [endLocation, setEndLocation] = useState()
    const [startSuggestions, setStartSuggestions] = useState([])
    const [endSuggestions, setEndSuggestions] = useState([])

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

    useEffect(() => {
        async function fetchLocations () {
            const results = await search(startLocation) // TODO: Debounce this
            setStartSuggestions(results)
        }

        fetchLocations()
    }, [startLocation])

    useEffect(() => {
        async function fetchLocations () {
            const results = await search(endLocation) // TODO: Debounce this
            setEndSuggestions(results)
        }

        fetchLocations()
    }, [endLocation])

    return (
        <StyledForm>
            <InputContainer>
                <Heading>Start Location</Heading>
                <Autocomplete
                    items={startSuggestions}
                    value={startLocation}
                    onChange={(e) => setStartLocation(e.target.value)}
                    getItemValue={(item) => item.address}
                    renderItem={(item, isHighlighted) =>
                        <LocationItem key={`${item.address}-start`} isHighlighted={isHighlighted}>
                            {item.address}
                        </LocationItem>
                    }
                    inputProps={{ style: inputStyle }}
                    menuStyle={{ visibility: startSuggestions.length ? 'visible' : 'hidden' }}
                    onSelect={val => {
                        setStartLocation(val)
                        setStartSuggestions([]) // Reset suggestions on selected value
                    }}
                />
                <Heading>End Location</Heading>
                <Autocomplete
                    items={endSuggestions}
                    value={endLocation}
                    onChange={(e) => setEndLocation(e.target.value)}
                    getItemValue={(item) => item.address}
                    renderItem={(item, isHighlighted) =>
                        <LocationItem key={`${item.address}-end`} isHighlighted={isHighlighted}>
                            {item.address}
                        </LocationItem>
                    }
                    inputProps={{ style: inputStyle }}
                    menuStyle={{ visibility: endSuggestions.length ? 'visible' : 'hidden' }}
                    onSelect={val => {
                        setEndLocation(val)
                        setEndSuggestions([]) // Reset suggestions on selected value
                    }}
                />
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

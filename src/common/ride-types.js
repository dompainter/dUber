const rideTypes = [{
    id: 'x',
    name: 'X',
    surchage: 1.2,
    canSetNumSeats: false
}, {
    id: 'pool',
    name: 'Pool',
    surchage: 1,
    canSetNumSeats: true
}, {
    id: 'xl',
    name: 'XL',
    surchage: 1.5,
    canSetNumSeats: false
}, {
    id: 'chopper',
    name: 'Chopper',
    surchage: 25,
    canSetNumSeats: true
}]

export function getAllRideTypes () { return rideTypes }

export function getRideType (rideTypeId) {
    return rideTypes.find(({ id }) => id === rideTypeId)
}

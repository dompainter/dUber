// TODO: JS-DOC

const API_KEY = 'thrTfch6TPLOlSNXLTXPNwQftM3JuIOz'

const search = async (param) => {
    if (!param || param.length < 3) return []
    const url = `https://api.tomtom.com/search/2/search/${param}.json?typeahead=true&limit=5&countrySet=AUS&key=${API_KEY}`

    const response = await fetch(url)
    const data = await response.json()

    return data.results.map(({ address, position }) => ({
        address: address.freeformAddress,
        ...position
    }))
}

export default search

import axios from 'axios'

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        lenguage: 'es',
        access_token: 'pk.eyJ1IjoicG90cmVybzEyIiwiYSI6ImNrem85ZWIydzU1NzkydXBxY252NDEwc3MifQ.5hEr94M0-mkS5FGIj_lGbw'
    }
})

export default searchApi;
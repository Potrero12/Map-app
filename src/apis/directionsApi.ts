import axios from 'axios'

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: 'false',
        access_token: 'pk.eyJ1IjoicG90cmVybzEyIiwiYSI6ImNrem85ZWIydzU1NzkydXBxY252NDEwc3MifQ.5hEr94M0-mkS5FGIj_lGbw'
    }
})

export default directionsApi;
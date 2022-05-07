import { MapProvider, PlacesProvider } from "./context"

import './styles.css'

import { HomePage } from "./screens/HomePage"


export const MapsApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomePage />
      </MapProvider>
    </PlacesProvider>
  )
}

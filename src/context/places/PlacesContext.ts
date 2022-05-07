import { createContext } from "react";
import { Feature } from '../../interfaces/Places';

export interface PlaceContextProps {
    isLoading: boolean,
    userLocation?:[number, number],
    isLoadingPlaces: boolean,
    places:Feature[]
    searchPlacesByTerm: (query:string) => Promise<Feature[]>
}



export const PlacesContext = createContext<PlaceContextProps>({} as PlaceContextProps);
import { ILocation } from "src/app/interfaces/location.interface";

export interface IGrapeVarietal {
    _id?: string,
    name: string,
    synonyms?: string[],
    originLocation?: ILocation,
    origin?: string,
    pedigree?: string,
    year?: string,
    type?: string,
}
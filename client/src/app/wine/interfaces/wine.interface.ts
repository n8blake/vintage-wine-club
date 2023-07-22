import { IGrapeVarietal } from "./grape-varietal";

export interface IWine {
  _id?: string;
  name?: string;
  description?: string;
  imageUrl?: string;
  avb?: number;
  color?: string;
  sparkling?: string;
  year?: number;
  vintage?: number | string;
  type?: string;
  origin?: IWineLocation;
  composition?: Array<IWineComponent>;
}

export interface IWineComponent {
    _id?: string;
    percentage?: number;
    grape?: string;
    varietal?: IGrapeVarietal;
}

export interface IWineLocation {
    latitude?: number;
    longitutde?: number;
    name?: number;
    address?: string | IAddress;
    region?: string;
}

export interface IAddress {
    street?: string;
    number?: number;
    postalCode?: number;
    state?: string;
    province?: string;
    country?: string;
}
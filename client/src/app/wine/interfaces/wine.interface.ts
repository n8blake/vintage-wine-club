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
    percentage?: number;
    grape?: string;
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
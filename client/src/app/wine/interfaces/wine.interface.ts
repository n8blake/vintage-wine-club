export interface IWine {
    _id?: string;
    name?: string;
    description?: string;
    year?: number;
    type?: string;
    color?: string;
    location?: IWineLocation;
    composition?: Array<IWineComponent>;
    tastingNotes?: Array<string>;
    imageUrl?: string;
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
import { Image } from "src/app/interfaces/image.interface";
import { IWine } from "src/app/wine/wine.interface";

export interface IUser {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  role?: string;
  token?: string;
  userCreated?: Date;
  image?: Image;
  shortBio?: string;
  longBio?: string;
  favoriteWine?: IWine;
}

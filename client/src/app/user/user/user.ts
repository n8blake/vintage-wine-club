import { Image } from "src/app/interfaces/image.interface";
import { IWine } from "src/app/wine/wine.interface";

export interface IUser {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  roles?: Array<IRole>;
  token?: string;
  userCreated?: Date;
  image?: string;
  shortBio?: string;
  longBio?: string;
  password?: string;
}

export interface IRole {
  _id: string;
  role?: string;
}
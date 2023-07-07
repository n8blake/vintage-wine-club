import { IWineNoteCategory } from "./wine-note-category";

export interface IWineNote {
    _id?: string,
    category?: IWineNoteCategory,
    label: string,
    color?: string,
    icons?: string,
    description?: string,
}

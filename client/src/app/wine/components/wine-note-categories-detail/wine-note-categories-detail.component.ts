import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WineService } from '../../services/wine.service';
import { IWineNoteCategory } from '../../interfaces/wine-note-category';
import { IWineNote } from '../../interfaces/wine-note';
import { AuthService } from 'src/app/user/auth/auth.service';
import { IRole } from 'src/app/user/user/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-wine-note-categories-detail',
  templateUrl: './wine-note-categories-detail.component.html',
  styleUrls: ['./wine-note-categories-detail.component.scss']
})
export class WineNoteCategoriesDetailComponent implements OnInit {

  noteCategory?: IWineNoteCategory
  notes?: IWineNote[]
  userRoles?: IRole[]
  isEditing: boolean = false
  isAddingNote: boolean = false
  noteCategoryEditable: any = {};
  newNote: IWineNote = {
    label: "",
    color: "#563d7c",
    category: {category:""}
  }

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private wineService: WineService, private authService: AuthService) { }

  ngOnInit(): void {
    const categoryArray = this.activatedRoute.snapshot.data['category'];
    const _category = categoryArray.find((item: IWineNoteCategory) => item._id ? true : false);
    if(_category){
      this.noteCategory = _category;
    }
    //console.log(this.noteCategory);
    this.fetchNotes();
    const user = this.authService.getCurrentUser();
    this.userRoles = user?.roles;
    //console.log(this.userRoles);
    this.resetNoteCategoryEditable();
    this.resetNewNote();
  }

  resetNoteCategoryEditable(): void {
    if(this.noteCategory && this.noteCategory._id){
      this.noteCategoryEditable = {
        _id: this.noteCategory._id,
        category: this.noteCategory.category,
        description: this.noteCategory.description,
      };
      if(this.noteCategory.color){
        this.noteCategoryEditable.color = this.noteCategory.color;
      }
    }
  }

  fetchNotes(): void {
    this.wineService.getNotes(this.noteCategory).subscribe(notes => {
      this.notes = notes
    })
  }

  resetNewNote(): void {
    this.newNote = {
      label: "",
      color: (this.noteCategory && this.noteCategory.color) ? this.noteCategory.color : "" ,
      category: this.noteCategory ? this.noteCategory : {category:""}
    }
  }

  addNote(newNoteForm: NgForm): void {
    console.log(newNoteForm.value);
    console.log(this.newNote);
    this.wineService.saveNote(this.newNote).subscribe(response => {
      console.log(response);
      this.fetchNotes();
      this.isAddingNote = false;
      this.resetNewNote();
    })
  }

  isSommelier(): boolean{
    return this.userRoles?.find(role => role.role == 'sommelier') ? true : false;
  }

  update(form: NgForm): void {
    if(this.noteCategoryEditable && this.noteCategoryEditable._id){
      this.wineService.saveNoteCategory(this.noteCategoryEditable).subscribe(category => {
        if(this.noteCategory && this.noteCategory._id){
          this.wineService.getNoteCategory(this.noteCategory._id).subscribe(updatedCategory => {
            this.noteCategory = updatedCategory;
            this.resetNoteCategoryEditable();
            this.isEditing = false;
          })
        } else {
          console.error("An Error occured during update.")
        }
      })
    }
  }

  cancel(): void {
    this.resetNoteCategoryEditable();
    this.isEditing = false;
  }


}

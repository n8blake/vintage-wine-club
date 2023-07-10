import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WineService } from '../../services/wine.service';
import { IWineNote } from '../../interfaces/wine-note';
import { IRole } from 'src/app/user/user/user';
import { AuthService } from 'src/app/user/auth/auth.service';
import { IWineNoteCategory } from '../../interfaces/wine-note-category';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {

  wineNote?: IWineNote
  noteCategories?: IWineNoteCategory[]
  isEditing: boolean = false;
  userRoles?: IRole[];
  wineNoteEditable: any = {
    color: "#000000"
  }
  showingMore: boolean = false

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private wineService: WineService, private authService: AuthService) { }

  ngOnInit(): void {
    this.wineNote = this.activatedRoute.snapshot.data['note'];
    console.log(this.wineNote);
    const user = this.authService.getCurrentUser();
    this.userRoles = user?.roles;
    if(this.isSommelier()){
      this.wineService.getNoteCategories().subscribe(categories => {
        this.noteCategories = categories;
      })
    }
    this.resetNoteEditable();
  }

  resetNoteEditable(): void {
    if(this.wineNote && this.wineNote._id){
      this.wineNoteEditable = {
        _id: this.wineNote._id,
        category: this.wineNote.category,
        label: this.wineNote.label
      }
      if(this.wineNote.color){
        this.wineNoteEditable.color = this.wineNote.color
      } else if(this.wineNote.category && this.wineNote.category.color){
        this.wineNoteEditable.color = this.wineNote.category.color
      }
      if(this.wineNote.description){
        this.wineNoteEditable.description = this.wineNote.description
      }
    }
  }

  refreshNote(): void {
    if (this.wineNote && this.wineNote._id) {
      this.wineService.getNoteById(this.wineNote?._id).subscribe(note => {
        this.wineNote = note;
      })
    }
  }

  isSommelier(): boolean{
    return this.userRoles?.find(role => role.role == 'sommelier') ? true : false;
  }

  update(form: NgForm): void {
    console.log(form.value);
    const note: IWineNote = {
      _id: this.wineNote?._id,
      label: form.value.label,
      category: form.value.category,
    }
    if(form.value.description){
      note.description = form.value.description;
    }
    if(form.value.color){
      note.color = form.value.color;
    }

    this.wineService.saveNote(note).subscribe(note => {
      console.log(note);
      this.wineNote?._id == note._id;
      this.refreshNote();
      this.resetNoteEditable();
      this.isEditing = false;
    })
  }

  deleteNote(): void {
    if(confirm('Are you sure you wish to delete this tasting note. This action cannot be undone')){
      // this.wineService.deleteNote(this.wineNote?._id){

      // }
    }
  }

  cancel(): void {
    this.refreshNote();
    this.resetNoteEditable();
    this.isEditing = false;
  }

  compareCategories(cat1: IWineNoteCategory, cat2: IWineNoteCategory): boolean {
    return (cat1 && cat2) ? cat1._id === cat2._id : false
  }

  showMore(): void {
    this.showingMore = true;
  }

  showLess(): void {
    this.showingMore = false;
  }

}

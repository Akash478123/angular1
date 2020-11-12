import { Component,OnInit} from '@angular/core';
// import{HttpClient}from '@angular/common/http';
import { NotesService } from './notes.service';
import{Note}from './note';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  errMessage: string;
  note: Note = new Note();
  notes: Array<Note>=[];

  constructor(private noteService:NotesService){}

   ngOnInit():void
   {   
      this.noteService.getNotes()
      .subscribe(data=>
      {
        if (data) {
          this.notes = data;
        } else {
          this.errMessage = 'We are unable to retreive notes list.';
        }
        
      // console.log(data);
      // this.notes=data; 
    },
    (err)=>{
      this.errMessage = 'Http failure response for http://localhost:3000/notes: 404 Not Found';
      // console.log(err);
    });
   }
 
  // errMessage: string;
takeNote() :void

 {
  if (!this.note.text || !this.note.title) {
    this.errMessage = 'Title and Text both are required fields';
    return;
  }

  this.noteService.addNote(this.note).subscribe(data => {
    if (data) {
      this.notes.push(this.note);
      this.note = new Note();
    } else {
      this.errMessage = 'We are unable to add the selected note.';
    }
  }, error => {
    this.errMessage = 'Http failure response for http://localhost:3000/notes: 404 Not Found';
  });
}
}


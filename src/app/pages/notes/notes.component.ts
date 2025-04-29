import { Component } from '@angular/core';
import { NoteStateService } from '../../services/note/note-state.service';
import { inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteComponent } from "../note/note.component";

@Component({
  selector: 'app-notes',
  imports: [NoteComponent],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {

  curretnState = false;
  private _noteService = inject(NoteStateService);
  private _fb = inject(FormBuilder);
  noteForm: FormGroup;

  constructor()
  {
    this.noteForm = this._fb.group({
      titel: ['', [Validators.required]],
      content: ['', [Validators.required]],
      attachment: ['']
    })
  }


  editNote()
  {
    this.curretnState = false;
  }

  save()
  {
    this.curretnState = true
  }

  isInvalid(): boolean
  {
    return this.noteForm.invalid
  }

}

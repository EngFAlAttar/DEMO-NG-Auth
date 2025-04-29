import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteStateService {

  private _noteState = new BehaviorSubject(false);


  constructor() { }

  setState(state: boolean)
  {
    this._noteState.next(state)
  }

  getState():Observable<boolean>
  {
    return this._noteState.asObservable();
  }
}

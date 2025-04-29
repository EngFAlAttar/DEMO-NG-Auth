import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { NoteStateService } from '../services/note/note-state.service';

export const roleGuard: CanActivateFn = (route, state) => {
  
  const status = inject(NoteStateService);
  status.getState().subscribe((res)=>{
    return res;
  })
  return true;
};

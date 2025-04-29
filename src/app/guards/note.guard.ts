import { CanDeactivateFn } from '@angular/router';

export const noteGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};

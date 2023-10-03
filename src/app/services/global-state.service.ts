import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { ApplicationState } from '../models/ApplicationState.model';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root',
})
export class GlobalStateService {
  applicationState: ApplicationState = {
    user: {
      age: '',
      username: '',
    },
  };

  state$ = new BehaviorSubject<ApplicationState | undefined>(undefined);
  dispatch = this.state$.asObservable();

  getUser$ = this.dispatch.pipe(map((state) => state?.user));
  saveUsersData(): void {
    /* 
    Här kan du köra något i stil med:
    Din userService kör HTTP.GET och hämtar data som du sätter här i state
    
      this.userService.getUser().subscribe(user => {
      this.setUser(user);
    })
    */
  }

  setUser(user: User): void {
    this.state$.next(
      (this.applicationState = {
        ...this.applicationState,
        user: {
          ...this.applicationState.user,
          ...user,
        },
      })
    );
  }
}

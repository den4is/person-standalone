import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalStateService } from '../services/global-state.service';
import { User } from '../models/User.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.scss'],
})
export class UserSummaryComponent {
  userData: Observable<User | undefined> = this.globalStateService.getUser$;

  constructor(private globalStateService: GlobalStateService) {
    // globalStateService.getUser$.subscribe((user) => {
    //   this.userData = user;
    // }); Annat sätt att göra det på istället för rad 15.
  }

  // Uppdaterar state - inte OK egentligen bara test
  mutateData(): void {
    this.globalStateService.setUser({
      age: '1337',
      username: 'Leet',
    });
  }
}

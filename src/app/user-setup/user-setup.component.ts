import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { GlobalStateService } from '../services/global-state.service';
import { Router } from '@angular/router';
import { CapitilizedLettersPipe } from './../../../libs/shared/src/pipes/capitilized-letters.pipe';

export class AgeForm {
  username = new FormControl<string>('');
  age = new FormControl<string>('');
}

@Component({
  selector: 'app-user-setup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CapitilizedLettersPipe],
  templateUrl: './user-setup.component.html',
  styleUrls: ['./user-setup.component.scss'],
})
export class UserSetupComponent {
  public testingPipe: string = 'smabokstaverskablistora';
  constructor(
    private globalStateService: GlobalStateService,
    private router: Router
    ) {}
    // GlobalStateService = inject(GlobalStateService);
    
    @Input() username: any;
    
    userForm = new FormGroup<AgeForm>({
      age: new FormControl<string>(''),
      username: new FormControl<string>(''),
    });

  saveUserInput(): void {
    this.globalStateService.setUser({
      age: this.userForm.controls.age.value!,
      username: this.userForm.controls.username.value!,
    });
    this.router.navigate(['user-summary']);
  }
}

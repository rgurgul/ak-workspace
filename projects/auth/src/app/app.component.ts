import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  template: `
    <form [formGroup]="form" (submit)="onSubmit($event)">
      <input type="text" formControlName="username" />
      <br>
      <input type="text" formControlName="password" />
      <br>
      <button>send</button>
    </form>
    {{ form.value | json }}
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  onSubmit($event: SubmitEvent) {
    console.log(this.form.valid);
  }
  title = 'auth';
  fb = inject(FormBuilder);
  form: FormGroup = this.fb.group({});

  constructor() {
    this.form.addControl('username', this.fb.control('bob'));
    this.form.addControl('password', this.fb.control(''));
  }
}

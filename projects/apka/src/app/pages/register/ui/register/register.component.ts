import { Component, inject } from '@angular/core';
import { RegisterService } from '../../../../shared/services/register.service';
import { CommonModule } from '@angular/common';
import { FormGeneratorComponent } from 'my-lib';
import { FieldConfig } from '../../../../../../../my-lib/src/lib/types/form.types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormGeneratorComponent],
  template: `

  <lib-form-generator [formConfig]="formConfig$|async"></lib-form-generator>
  <pre>{{formConfig$|async|json}}</pre>
    
  `,
  styles: ``,
})
export class RegisterComponent {
  registerServie = inject<any>(RegisterService);
  formConfig$:Observable<FieldConfig[]> = this.registerServie.formConfig$;
}

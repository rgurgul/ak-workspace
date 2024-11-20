import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-form-generator',
  standalone: true,
  imports: [],
  templateUrl: './form-generator.component.html',
  styles: ``
})
export class FormGeneratorComponent {

  formConfig = input.required();

}

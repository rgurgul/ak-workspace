import { Component, effect, input, Signal } from '@angular/core';
import { FieldConfig } from '../../../types/form.types';

@Component({
  selector: 'lib-form-generator',
  standalone: true,
  imports: [],
  templateUrl: './form-generator.component.html',
  styles: ``,
})
export class FormGeneratorComponent  {
  formConfig = input.required();

  constructor(){
    effect(()=>{
      console.log(this.formConfig());
    })
  }
}

import { Component, effect, inject, input, Signal } from '@angular/core';
import { FieldConfig } from '../../../types/form.types';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'lib-form-generator',
  standalone: true,
  imports: [],
  templateUrl: './form-generator.component.html',
  styles: ``,
})
export class FormGeneratorComponent  {
  formConfig = input.required();
  fb = inject(FormBuilder);
  form = this.fb.group({})

  constructor(){
    effect(()=>{
      this.formConfig() && this.createFormModel(this.formConfig());
    })
  }
  createFormModel(config:any) {
    debugger;
    
  }
}

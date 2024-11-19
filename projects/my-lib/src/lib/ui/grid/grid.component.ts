import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { DataGridRowConfig } from '../../types/grid.types';

@Component({
  selector: 'lib-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid.component.html',
  styles: ``,
})
export class GridComponent {
  clickHandler(type: string | undefined, payload: any) {
    this.action.emit({type,payload})
  }
  data = input.required<any>();
  config = input.required<DataGridRowConfig<any>[]>();
  action = output<any>();
}

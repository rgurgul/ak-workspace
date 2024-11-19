import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { DataGridRowConfig } from '../../types/grid.types';

@Component({
  selector: 'lib-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid.component.html',
  styles: ``,
})
export class GridComponent {
  data = input.required<any>();
  config = input.required<DataGridRowConfig<any>[]>();
}

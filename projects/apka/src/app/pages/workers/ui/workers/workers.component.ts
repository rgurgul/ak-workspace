import {Component, inject} from '@angular/core';
import {AsyncPipe, JsonPipe} from '@angular/common';
import {WorkerModel} from '../../../../shared/types/services.types';
import {GridComponent} from '../../../../../../../my-lib/src/lib/ui/grid/grid.component';
import {DataGridRowConfig, FieldTypes} from '../../../../../../../my-lib/src/lib/types/grid.types';
import { WorkersService } from './worker.service';

type Keys = keyof WorkerModel;

@Component({
  selector: 'app-workers',
  standalone: true,
  imports: [
    JsonPipe,
    AsyncPipe,
    GridComponent
  ],
  template: `
    <div>
      <lib-grid [data]="workers$ | async"
                [config]="configGrid"></lib-grid>
    </div>
  `,
  styles: ``
})
export class WorkersComponent {
workerService = inject(WorkersService);
workers$ = this.workerService.state$
  configGrid: DataGridRowConfig<Keys>[] = [
    {key: 'name'},
    {key: 'phone', type: FieldTypes.INPUT},
  ]


  constructor() {
  this.workerService.dispatch({type: 'fetchWorkers'})
  }
}
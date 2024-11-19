import { Component, inject } from '@angular/core';
import { ItemsService } from '../../service/items.service';
import { CommonModule } from '@angular/common';
import { GridComponent } from 'my-lib';
import { Observable } from 'rxjs';
import {
  DataGridRowConfig,
  FieldTypes,
} from '../../../../../../../my-lib/src/lib/types/grid.types';
import { ItemModel } from '../../../../shared/types/services.types';

type Keys = keyof ItemModel;

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, GridComponent],
  template: `
    <div>
      <lib-grid
        (action)="actionHandler($event)"
        [config]="configGrid"
        [data]="items$ | async"
      ></lib-grid>
    </div>
  `,
  styles: ``,
})
export class ItemsComponent {
  actionHandler($event: any) {
    debugger;
  }
  itemsService = inject(ItemsService);
  items$ = this.itemsService.state$;
  configGrid: DataGridRowConfig<Keys>[] = [
    { key: 'title' },
    { key: 'price', type: FieldTypes.INPUT },
    { key: 'imgSrc', type: FieldTypes.IMAGE },
    { type: FieldTypes.BUTTON, header: 'remove' },
    { type: FieldTypes.BUTTON, header: 'more' },
  ];
  constructor() {
    this.itemsService.dispatch({ type: 'fetchItems' });
  }
}

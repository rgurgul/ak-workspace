import { Component, inject } from '@angular/core';
import { ItemsService } from '../../service/items.service';
import { CommonModule } from '@angular/common';
import { GridComponent } from 'my-lib';
import { Observable } from 'rxjs';
import { DataGridRowConfig, FieldTypes } from '../../../../../../../my-lib/src/lib/types/grid.types';
import { ItemModel } from '../../../../shared/types/services.types';
type Keys = 'input' | 'image';
@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule,GridComponent],
  template: `
    <div>
      <lib-grid [config]="configGrid" [data]="items$|async"></lib-grid>
    </div>
  `,
  styles: ``,
})
export class ItemsComponent {
  itemsService = inject(ItemsService);
  items$ = this.itemsService.state$;
  configGrid:DataGridRowConfig<any>[] = [
    {key:'title'},
    {key:'price', type:FieldTypes.INPUT},
    {key:'imgSrc', type:FieldTypes.IMAGE},
  ]
  constructor() {
    this.itemsService.dispatch({ type: 'fetchItems' });
  }
}

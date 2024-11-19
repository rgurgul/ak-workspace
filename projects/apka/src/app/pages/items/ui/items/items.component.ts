import { Component, inject } from '@angular/core';
import { ItemsService } from '../../service/items.service';
import { CommonModule } from '@angular/common';
import { GridComponent } from 'my-lib';
import { Observable } from 'rxjs';
import {
  DataGridRowConfig,
  FieldTypes,
  GridAction,
} from '../../../../../../../my-lib/src/lib/types/grid.types';
import { ItemModel } from '../../../../shared/types/services.types';
import { CartService } from '../../../cart/services/cart.service';

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
  actionHandler({ type, payload }: any) {
    switch (type) {
      case 'buy':
        this.cartService.dispatch({ type, payload });
        break;

      default:
        break;
    }
  }
  itemsService = inject(ItemsService);
  cartService = inject(CartService);
  items$ = this.itemsService.state$;
  configGrid: DataGridRowConfig<Keys>[] = [
    { key: 'title' },
    { key: 'price', type: FieldTypes.INPUT },
    { key: 'imgSrc', type: FieldTypes.IMAGE },
    { type: FieldTypes.BUTTON, header: 'buy' },
    { type: FieldTypes.BUTTON, header: 'more' },
  ];
  constructor() {
    this.itemsService.dispatch({ type: 'fetchItems' });
  }
}

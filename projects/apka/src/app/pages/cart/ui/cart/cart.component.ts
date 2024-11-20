import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { GridComponent } from 'my-lib';
import {
  DataGridRowConfig,
  FieldTypes,
} from '../../../../../../../my-lib/src/lib/types/grid.types';
import { ItemModel } from '../../../../shared/types/services.types';
import { CartItemModel } from '../../../../shared/types/store.models';

type Keys = keyof CartItemModel;

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, GridComponent],
  template: `
       
    <div>
           
      <lib-grid
        (action)="actionHandler($event)"
        [config]="configGrid"
        [data]="cart$ | async"
      >
             
      </lib-grid>
         
    </div>
     
  `,
  styles: ``,
})
export class CartComponent {
  actionHandler({ type, payload }: any) {
    switch (type) {
      case '+':
        this.cartService.dispatch({ type: 'buy', payload });
        break;
      case '-':
        this.cartService.dispatch({ type: 'remove', payload });
        break;
      default:
        break;
    }
  }

  cartService = inject(CartService);
  cart$ = this.cartService.state$;

  configGrid: DataGridRowConfig<Keys>[] = [
    { key: 'title' },
    { key: 'price' },
    { key: 'count' },
    { key: 'imgSrc', type: FieldTypes.IMAGE },
    { type: FieldTypes.BUTTON, header: '+' },
    { type: FieldTypes.BUTTON, header: '-' },
  ];
}

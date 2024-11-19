import { Injectable } from '@angular/core';
import { State, StateAction } from '../../../shared/services/state';
import { ItemModel } from '../../../shared/types/services.types';

type CartAction = 'buy' | 'fetch' | 'remove';

@Injectable({
  providedIn: 'root'
})
export class CartService extends State<ItemModel[]> {
  override dispatch({ payload, type }: StateAction<CartAction, any>): void {
    switch (type) {
      case 'buy':
        super.setState([payload])
        break;
    
      default:
        break;
    }
  }

  constructor() { 
    super([])
  }
}

import { Injectable } from '@angular/core';
import { State, StateAction } from '../../../shared/services/state';
import { ItemModel } from '../../../shared/types/services.types';

@Injectable({
  providedIn: 'root'
})
export class CartService extends State<ItemModel[]> {
  override dispatch({ payload, type }: StateAction<unknown, unknown>): void {
    
  }

  constructor() { 
    super([])
  }
}

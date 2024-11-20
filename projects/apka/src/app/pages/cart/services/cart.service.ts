import { inject, Injectable } from '@angular/core';
import { State, StateAction } from '../../../shared/services/state';
import { ItemModel } from '../../../shared/types/services.types';
import { Utils } from '../../../shared/utils/array-utils';
import { CartItemModel } from '../../../shared/types/store.models';
import { CartIDBService } from '../../../shared/services/cart.idb.service';
import { from, skip } from 'rxjs';

type CartAction = 'buy' | 'fetch' | 'remove';

@Injectable({
  providedIn: 'root',
})
export class CartService extends State<CartItemModel[]> {
  idb = inject(CartIDBService);

  override dispatch({ payload, type }: StateAction<CartAction, any>): void {
    switch (type) {
      case 'buy':
        const nextState = Utils.addOrIncreaseParam(
          super.value,
          payload,
          'count'
        );
        super.setState(nextState);
        break;
      case 'remove':
        const nextState1 = Utils.removeOrDecreaseParam(
          super.value,
          payload,
          'count'
        );
        super.setState(nextState1);
        break;
      default:
        break;
    }
  }

  constructor() {
    super([]);

    from(this.idb.get()).subscribe((value) => {
      super.setState(value as CartItemModel[]);
    });

    super.state$.pipe(skip(1)).subscribe((state) => {
      this.idb.update(state as any);
    });
  }
}

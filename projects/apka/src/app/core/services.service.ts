import { Injectable } from '@angular/core';
import { State, StateAction } from '../shared/services/state';

type CoreStoreType = {
  loading: boolean;
  access: boolean;
  theme: string;
};

const intiStore: CoreStoreType = {
  loading: false,
  access: false,
  theme: 'light',
};

@Injectable({
  providedIn: 'root',
})
export class CoreService extends State<CoreStoreType> {
  override dispatch({
    payload,
    type,
  }: StateAction<keyof CoreStoreType, any>): void {
    switch (type) {
      case 'loading':
        super.updateState({ loading: payload });
        break;

      default:
        break;
    }
  }

  constructor() {
    super(intiStore);
  }
}

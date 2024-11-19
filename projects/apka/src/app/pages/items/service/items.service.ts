import { inject, Injectable } from '@angular/core';
import { State, StateAction } from '../../../shared/services/state';
import { HttpResponseModel, ItemModel } from '../../../shared/types/services.types';
import { HttpClient } from '@angular/common/http';
import { Api } from '../../../shared/utils/api';

type ItemsActions = 'fetchItems' | 'removeItem';

@Injectable({
  providedIn: 'root'
})
export class ItemsService extends State<ItemModel[]> {

  http = inject(HttpClient);

  override dispatch({ payload, type }: StateAction<ItemsActions, any>): void {
    switch (type) {
      case 'fetchItems':
        this.http.get<HttpResponseModel<ItemModel>>(Api.ITEMS_END_POINT).subscribe((resp)=>{
          super.setState(resp.data);
        })
        break;
    
      default:
        break;
    }
  }

  constructor() { 
    super([])
  }
}

import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { State, StateAction } from '../../../../shared/services/state';
import { WorkerModel, HttpResponseModel } from '../../../../shared/types/services.types';
import { Api } from '../../../../shared/utils/api';


type WorkersAction = 'fetchWorkers' | 'removeWorkers'

@Injectable({
  providedIn: 'root'
})
export class WorkersService extends State<WorkerModel[]> {

  http = inject(HttpClient);
  dispatch({payload, type}: StateAction<WorkersAction, unknown>): void {
    this.http.get<HttpResponseModel<any>>(Api.WORKERS_END_POINT)
      .subscribe((resp) => {
        super.setState(resp.data)
      })
  }

  constructor() {
    super([]); }
}
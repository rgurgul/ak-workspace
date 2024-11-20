import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Api } from '../utils/api';

@Injectable({ providedIn: 'root' })
export class RegisterService {
  http = inject(HttpClient);
  formConfig$: Observable<any>;

  constructor(){
    this.formConfig$ = this.http
    .get<{ data: any[] }>(Api.DATA_FORM_CONFIG)
    .pipe(map((resp: { data: any[] }) => resp.data));
  }
}

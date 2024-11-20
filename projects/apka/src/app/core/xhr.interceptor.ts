import { HttpInterceptorFn, HttpResponseBase } from '@angular/common/http';
import { inject } from '@angular/core';
import { CoreService } from './services.service';
import { tap } from 'rxjs';

export const xhrInterceptor: HttpInterceptorFn = (req, next) => {
  const coreService = inject(CoreService);
  coreService.dispatch({ type: 'loading', payload: true });
  return next(req).pipe(
    tap((resp)=>{
      if(resp instanceof HttpResponseBase) {
        coreService.dispatch({ type: 'loading', payload: false });
      }
    })
  );
};

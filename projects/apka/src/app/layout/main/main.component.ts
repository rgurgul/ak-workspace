import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterModule } from '@angular/router';
import {
  MenuComponent,
  IMenu,
} from '../../shared/components/menu/menu.component';
import { CartService } from '../../pages/cart/services/cart.service';
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component';
import { CoreService } from '../../core/services.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterModule,
    MenuComponent,
    CommonModule,
    SpinnerComponent
  ],
})
export class MainComponent {
  private breakpointObserver = inject(BreakpointObserver);
  cartService = inject(CartService);
  coreService = inject(CoreService);
  loading$:any = this.coreService.select((state)=>state.loading || false)
  cartCount$ = this.cartService.state$.pipe(
    map((items) => items.reduce((acc, item) => acc + item.count, 0))
  );


  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  menus: IMenu[] = [
    { name: 'items', path: '/items' },
    { name: 'workers', path: '/workers' },
    { name: 'register', path: '/register' },
    { name: 'cart', path: '/cart' },
  ];
}

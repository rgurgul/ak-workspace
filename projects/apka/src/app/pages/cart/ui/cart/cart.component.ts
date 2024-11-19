import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      {{cart$|async|json}}
    </div>
  `,
  styles: ``
})
export class CartComponent {

  cartService = inject(CartService);
  cart$ = this.cartService.state$;

}

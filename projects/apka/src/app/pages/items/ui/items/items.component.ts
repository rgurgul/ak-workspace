import { Component, inject } from '@angular/core';
import { ItemsService } from '../../service/items.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      {{items$|async|json}}
    </div>
  `,
  styles: ``,
})
export class ItemsComponent {
  itemsService = inject(ItemsService);
  items$ = this.itemsService.state$;
  constructor() {
    this.itemsService.dispatch({ type: 'fetchItems' });
  }
}

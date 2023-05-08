import { Component } from '@angular/core';
import { InventoryComponent } from '../inventory/inventory.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  carts: [string, number][] = [];

  addFruitToCart(fruit: string): void {
    if (this.carts.length === 0) {
      this.carts.push([fruit, 1]);
      return;
    }
    for (let i = 0; i < this.carts.length; i++) {
      if (this.carts[i][0] !== fruit) {
        continue;
      } else {
        this.carts[i][1]++;
        return;
      }
    }
    this.carts.push([fruit, 1]);
  }

  reduce(fruit: string): void {
    for (let i = 0; i < this.carts.length; i++) {
      if (this.carts[i][0] === fruit) {
        if (this.carts[i][1] === 1) {
          this.remove(fruit);
          return;
        }
        this.carts[i][1]--;
      }
    }
  }

  remove(fruit: string): void {
    for (let i = 0; i < this.carts.length; i++) {
      if (this.carts[i][0] === fruit) {
        this.carts.splice(i, 1);
      }
    }
  }
}

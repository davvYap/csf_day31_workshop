import { Component, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { FRUITS } from '../fruits';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent {
  fruits = FRUITS;

  @Output() selectedFruit = new Subject<string>();

  addToCart(fruit: string): void {
    this.selectedFruit.next(fruit);
    console.log(`Added ${fruit} to cart`);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  products = [
    { name: 'Product 1', price: 100, discount: 10, quantity: 1 },
    { name: 'Product 2', price: 200, discount: 20, quantity: 1 },
    { name: 'Product 3', price: 300, discount: 30, quantity: 1 }
  ];

  addToCart(product: any) {
    console.log('Adding to cart:', product);
  }

  updateQuantity(product: any, quantity: number) {
    product.quantity = quantity;
  }

  getDiscountedPrice(product: any) {
    return product.price - (product.price * product.discount / 100);
  }
}

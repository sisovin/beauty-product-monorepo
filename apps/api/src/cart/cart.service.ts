import { Injectable } from '@nestjs/common';

@Injectable()
export class CartService {
  private readonly cartKey = 'cartItems';

  getCartItems(): any[] {
    const cartItems = localStorage.getItem(this.cartKey);
    return cartItems ? JSON.parse(cartItems) : [];
  }

  addCartItem(item: any): void {
    const cartItems = this.getCartItems();
    cartItems.push(item);
    localStorage.setItem(this.cartKey, JSON.stringify(cartItems));
  }

  removeCartItem(itemId: string): void {
    let cartItems = this.getCartItems();
    cartItems = cartItems.filter(item => item.id !== itemId);
    localStorage.setItem(this.cartKey, JSON.stringify(cartItems));
  }

  clearCart(): void {
    localStorage.removeItem(this.cartKey);
  }
}

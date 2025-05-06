export class CreateOrderDto {
  userId: string;
  productIds: string[];
  totalAmount: number;
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
}

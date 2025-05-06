export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  imageUrl: string;
  category: string;
  stock: number;
  rating: number;
  reviews: Review[];
}

export interface Review {
  userId: string;
  comment: string;
  rating: number;
}

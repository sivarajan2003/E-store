export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  unit: string;
  inStock: boolean;
  rating: number;
  reviews: number;
  organic?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export type Category = {
  id: string;
  name: string;
  icon: string;
};
// types/Product.ts
export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    reviews?: number; // Optional if not provided
  }
  
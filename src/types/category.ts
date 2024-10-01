export type Category = {
  id: string;
  name: string;
  image: string;
};

export interface Product {
  id: string;
  title: string;
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  images: [];
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  quantity: number;
  image: string;
  IsFeatured: boolean;
  IsFamous: boolean;
  IsSpecial: boolean;
}

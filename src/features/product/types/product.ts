export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface CreateProductDTO {
  title: string;
  price: number;
  category: string;
  description?: string;
}

export interface UpdateProductDTO extends Partial<CreateProductDTO> {
  id: number;
}

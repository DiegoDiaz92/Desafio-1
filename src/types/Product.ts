export interface Product {
  id: number;
  name: string;
  preco: number;
  img: string;
  ordem: number;
  category?: string;
  description?: string;  
}
import axios from 'axios';

export interface ICustomerSalesData {
  name: string;

  level: number;

  sales_amount: number;

  income: number;

  income_average: number;

  wharehouse: productStock[];
}

export interface productStock {
  product: Products;
  sell_quantity: number;
  income: number;
  available: number;
  last_sale: Date;
}

export interface Products {
  id: string;

  product_name: string;

  product_description: string;

  product_image: string;

  product_category: string;

  price: number;

  average_sell: number;

  rating: number;

  relevance: number;
}

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;

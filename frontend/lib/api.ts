import axios from 'axios';
import { Product } from '../types/product';
import { CartSummary } from '../types/cart';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProduct(id: string): Promise<Product> {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
}

export async function fetchCart(): Promise<CartSummary> {
    const response = await axios.get(`${API_URL}/cart`);
    return response.data;
}

export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
    }).format(amount / 100);
};
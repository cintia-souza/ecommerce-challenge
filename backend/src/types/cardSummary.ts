import type { Product } from "./product.ts";

export interface CartItem extends Product {
    quantity: number;
}

export interface CartSummary {
    items: CartItem[];
    subtotal: number;
}
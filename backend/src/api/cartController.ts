import type { Request, Response } from 'express';
import type { Product } from '../types/product.ts';
import { allProducts } from '../models/data.ts';
import type { CartItem, CartSummary } from '../types/cardSummary.ts';


let cart: Product[] = [];

export const addToCart = (req: Request, res: Response) => {
    const { productId, quantity = 1 } = req.body;

    const productToAdd = allProducts.find(p => p.id === productId);

    if (!productToAdd) {
        return res.status(404).json({ message: 'Product not found' });
    }

    for (let i = 0; i < quantity; i++) {
        cart.push(productToAdd);
    }

    return res.status(200).json({ message: 'Product added to cart', cartSize: cart.length });
};

export const getCart = (req: Request, res: Response) => {
    const itemMap = new Map();
    let subtotal = 0;

    for (const item of cart) {
        subtotal += item.promotionalPrice || item.price;
        
        if (itemMap.has(item.id)) {
            const existingItem = itemMap.get(item.id);
            existingItem.quantity++;
        } else {
            itemMap.set(item.id, {
                id: item.id,
                name: item.name,
                image: item.image,
                price: item.price,
                promotionalPrice: item.promotionalPrice,
                quantity: 1
            });
        }
    }

    const cartSummary: CartSummary = {
        items: Array.from(itemMap.values()) as CartItem[],
        subtotal
    };

    return res.json(cartSummary);
};

export const removeItemFromCart = (req: Request, res: Response) => {
    const { productId } = req.params;

    const itemIndex = cart.findIndex(p => p.id === productId);

    if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
        return res.status(200).json({ message: 'Item removed from cart', cartSize: cart.length });
    }

    return res.status(404).json({ message: 'Item not found in cart' });
};
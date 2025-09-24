'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { CartItem, CartSummary } from '@/types/cart';

interface CartContextType {
    cart: CartSummary | null;
    isLoading: boolean;
    isCartOpen: boolean;
    toggleCart: () => void;
    addItemToCart: (item: CartItem) => void; 
    removeItemFromCart: (itemId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartSummary | null>({ items: [], subtotal: 0 });
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(prev => !prev);
    };

    const addItemToCart = useCallback((item: CartItem) => {
        if (cart) {
            const existingItem = cart.items.find(i => i.id === item.id);
            let updatedItems;
            let updatedSubtotal;

            if (existingItem) {
                updatedItems = cart.items.map(i =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            } else {
                updatedItems = [...cart.items, { ...item, quantity: 1 }];
            }
            updatedSubtotal = updatedItems.reduce(
                (sum, current) => sum + (current.promotionalPrice || current.price) * current.quantity,
                0
            );

            setCart({ items: updatedItems, subtotal: updatedSubtotal });
        }
    }, [cart]);

    const removeItemFromCart = useCallback((itemId: string) => {
        if (cart) {
            const updatedItems = cart.items.filter(item => item.id !== itemId);
            
            const updatedSubtotal = updatedItems.reduce(
                (sum, current) => sum + (current.promotionalPrice || current.price) * current.quantity,
                0
            );

            setCart({ items: updatedItems, subtotal: updatedSubtotal });
        }
    }, [cart]);

    return (
        <CartContext.Provider 
            value={{ 
                cart, 
                isLoading: false,
                isCartOpen, 
                toggleCart, 
                addItemToCart, 
                removeItemFromCart 
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCartContext must be used within a CartProvider');
    }
    return context;
};
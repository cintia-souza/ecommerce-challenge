'use client';

import { Product } from '@/types/product';
import { formatCurrency } from '@/lib/api';
import { useState } from 'react';
import { useCartContext } from '@/context/CartContext';

interface ProductDetailsProps {
    product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
    const [isLoading, setIsLoading] = useState(false);
    const {addItemToCart, toggleCart } = useCartContext()

    const handleAddToCart = async () => {
        setIsLoading(true);
        try {
            await addItemToCart({ ...product, quantity: 1 });
            alert(`${product.name} adicionado ao carrinho!`);
        } catch (error) {
            console.error("Erro ao adicionar ao carrinho:", error);
            alert('Falha ao adicionar ao carrinho. Tente novamente.');
        } finally {
            setIsLoading(false);
        }
    };

    const displayPrice = product.promotionalPrice || product.price;
    const originalPrice = product.price;
    const isPromotional = !!product.promotionalPrice;

    return (
        <div className="p-6 bg-white rounded-lg shadow-md sticky top-4">
            <p className="text-sm text-gray-500 uppercase">{product.category}</p>
            <h1 className="text-4xl font-bold text-gray-900 mt-1">{product.name}</h1>
            
            <div className="flex items-baseline mt-4 mb-6">
                <span className="text-3xl font-extrabold text-amber-600">
                    {formatCurrency(displayPrice)}
                </span>
                {isPromotional && (
                    <span className="ml-3 text-xl font-medium text-gray-400 line-through">
                        {formatCurrency(originalPrice)}
                    </span>
                )}
                {product.discount && (
                    <span className="ml-3 bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {product.discount}
                    </span>
                )}
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
            
            <button
                onClick={handleAddToCart}
                disabled={isLoading}
                className={`w-full py-3 px-6 text-white text-lg font-semibold rounded-lg transition duration-300 
                            ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
            >
                {isLoading ? 'Adicionando...' : 'Adicionar ao Carrinho'}
            </button>
            
            <div className="mt-8 pt-4 border-t border-gray-200 text-sm">
                <p>SKU: SS001</p>
                <p>Tags: Fantasia, Mistérios</p>
            </div>
        </div>
    );
}